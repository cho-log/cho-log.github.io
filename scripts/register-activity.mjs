import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const dataPath = fileURLToPath(new URL("../src/data/leads.ts", import.meta.url));
const roles = new Map([
  ["초록스터디 리드", "lead"],
  ["초록스터디 리뷰어", "reviewer"],
  ["초록해듀오 멘토", "mentor"],
]);
const actionLabels = { register: "등록", update: "수정", delete: "삭제" };
const existingLabels = ["기존 GitHub 링크", "기존 모임명", "기존 활동 연도", "기존 역할"];
const formLabels = {
  register: ["실명", "모임명", "학교", "활동 연도", "역할", "활동 설명", "증빙 링크"],
  update: [...existingLabels, "수정 후 실명", "수정 후 모임명", "수정 후 학교", "수정 후 활동 연도", "수정 후 역할", "수정 후 GitHub 링크", "수정 내용 설명", "증빙 링크"],
  delete: [...existingLabels, "추가 설명 또는 삭제 사유"],
};

// Issue Forms가 만드는 제목만 경계로 사용해 설명 안의 다른 Markdown 제목을 보존한다.
function parseAnswers(body, labels) {
  if (typeof body !== "string") throw new Error("이슈 본문을 읽을 수 없습니다.");
  const text = body.replace(/\r\n?/g, "\n");
  const headings = [...text.matchAll(new RegExp(`^### (${labels.join("|")})[ \\t]*$`, "gm"))];
  const answers = new Map();
  for (const [index, heading] of headings.entries()) {
    const label = heading[1];
    if (answers.has(label)) {
      throw new Error(`양식의 '${label}' 제목이 여러 번 나옵니다. 항목 제목을 한 번씩 유지해주세요.`);
    }
    const value = text.slice(heading.index + heading[0].length, headings[index + 1]?.index ?? text.length).trim();
    answers.set(label, value === "_No response_" ? "" : value);
  }
  return answers;
}

function requiredAnswer(answers, label) {
  const value = answers.get(label);
  if (!value) throw new Error(`양식의 '${label}' 항목을 읽을 수 없습니다. 제목과 응답을 확인해주세요.`);
  return value;
}

// 데이터 타입으로 변환할 수 있는지만 확인한다. 활동 사실·정책·증빙은 운영진이 검토한다.
function readYear(answers, label) {
  const value = requiredAnswer(answers, label);
  const year = Number(value);
  if (!/^\d+$/.test(value) || !Number.isSafeInteger(year)) {
    throw new Error(`${label}를 숫자로 변환할 수 없습니다. 예시처럼 2026으로 적어주세요.`);
  }
  return year;
}

function readRole(answers, label) {
  const role = roles.get(requiredAnswer(answers, label));
  if (!role) throw new Error(`${label}을 변환할 수 없습니다. 양식의 세 가지 역할 중 하나를 선택해주세요.`);
  return role;
}

function readDetails(answers, prefix, githubUrl) {
  return {
    name: requiredAnswer(answers, `${prefix}실명`),
    community: requiredAnswer(answers, `${prefix}모임명`),
    ...(answers.get(`${prefix}학교`) ? { university: answers.get(`${prefix}학교`) } : {}),
    year: readYear(answers, `${prefix}활동 연도`),
    githubUrl,
    role: readRole(answers, `${prefix}역할`),
  };
}

// 사용자 입력은 코드 문자열로 직렬화하고 실행하지 않는다.
function serialize(value) {
  return JSON.stringify(value).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
}

function renderRecord(record, newline, indent = "  ") {
  return ["{", ...Object.entries(record).map(([key, value]) => `${indent}  ${key}: ${serialize(value)},`), `${indent}}`].join(newline);
}

// PR에서도 입력을 텍스트로 표시한다. 입력 안의 백틱으로 코드 블록을 닫을 수 없다.
function reviewText(value) {
  const longestBackticks = Math.max(0, ...[...value.matchAll(/`+/g)].map(([match]) => match.length));
  const fence = "`".repeat(Math.max(3, longestBackticks + 1));
  return `${fence}text\n${value}\n${fence}`;
}

// 기존 TypeScript 파서로 정적인 값과 각 항목의 위치만 읽는다. 데이터 파일을 실행하지 않는다.
async function findTarget(source, selector) {
  const { default: ts } = await import("typescript");
  const file = ts.createSourceFile("leads.ts", source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  if (file.parseDiagnostics.length > 0) {
    throw new Error("leads.ts의 문법을 읽을 수 없습니다. 운영진이 데이터 파일을 확인해주세요.");
  }
  const declarations = file.statements.filter(ts.isVariableStatement)
    .flatMap((statement) => [...statement.declarationList.declarations])
    .filter((declaration) => ts.isIdentifier(declaration.name) && declaration.name.text === "leads");
  const array = declarations[0]?.initializer;
  if (declarations.length !== 1 || !array || !ts.isArrayLiteralExpression(array)) {
    throw new Error("leads.ts의 leads 배열을 읽을 수 없습니다. 운영진이 파일 구조를 확인해주세요.");
  }
  const records = array.elements.map((node, index) => {
    if (!ts.isObjectLiteralExpression(node)) {
      throw new Error("leads 배열에 읽을 수 없는 항목이 있습니다. 운영진이 파일 구조를 확인해주세요.");
    }
    const record = Object.create(null);
    for (const property of node.properties) {
      if (!ts.isPropertyAssignment(property) || (!ts.isIdentifier(property.name) && !ts.isStringLiteral(property.name))) {
        throw new Error("활동 기록의 필드를 읽을 수 없습니다. 운영진이 파일 구조를 확인해주세요.");
      }
      const key = property.name.text;
      const value = property.initializer;
      if (Object.hasOwn(record, key)) {
        throw new Error("활동 기록 안에 같은 필드가 여러 번 나옵니다. 운영진이 파일 구조를 확인해주세요.");
      }
      if (ts.isStringLiteral(value) || ts.isNoSubstitutionTemplateLiteral(value)) record[key] = value.text;
      else if (ts.isNumericLiteral(value)) record[key] = Number(value.text);
      else throw new Error("활동 기록에 정적인 문자열·숫자로 읽을 수 없는 값이 있습니다. 파일은 변경하지 않습니다.");
    }
    return { record, start: node.getStart(file), end: node.getEnd(), isLast: index === array.elements.length - 1 };
  });
  const matches = records.filter(({ record }) => Object.entries(selector).every(([key, value]) => record[key] === value));
  if (matches.length === 0) {
    throw new Error("기존 GitHub 링크·모임명·활동 연도·역할이 모두 일치하는 기록을 찾지 못했습니다. 현재 기록의 네 값을 그대로 적어주세요.");
  }
  if (matches.length !== 1) {
    throw new Error(`지정한 기존 정보와 일치하는 기록이 ${matches.length}개라 대상을 정할 수 없습니다. 운영진이 기록을 확인한 뒤 다시 처리해주세요.`);
  }
  return matches[0];
}

function deleteTarget(source, target) {
  let { start, end } = target;
  const lineStart = source.lastIndexOf("\n", start - 1) + 1;
  const occupiesOwnLine = /^[ \t]*$/.test(source.slice(lineStart, start));
  if (occupiesOwnLine) start = lineStart;
  const separator = source.slice(end).match(/^[ \t]*,/);
  if (separator) end += separator[0].length;
  else if (!target.isLast || !/^\s*\]/.test(source.slice(end))) {
    throw new Error("대상 기록 뒤의 구분 기호를 읽을 수 없습니다. 운영진이 파일 형식을 확인해주세요.");
  }
  const lineEnd = source.slice(end).match(/^[ \t]*\r?\n/);
  if (occupiesOwnLine && lineEnd) end += lineEnd[0].length;
  return source.slice(0, start) + source.slice(end);
}

function describeRecord(record) {
  const roleLabel = [...roles].find(([, value]) => value === record.role)?.[0] || record.role;
  return `ID: ${record.id}\n실명: ${record.name}\n모임명: ${record.community}\n학교: ${record.university || "미기재"}\n활동 연도: ${record.year}\n역할: ${roleLabel}\nGitHub 링크: ${record.githubUrl}`;
}

async function run() {
  const eventPath = process.env.GITHUB_EVENT_PATH;
  const bodyPath = process.env.ACTIVITY_PR_BODY_PATH;
  if (!eventPath || !bodyPath) throw new Error("GITHUB_EVENT_PATH와 ACTIVITY_PR_BODY_PATH가 필요합니다.");
  const { issue } = JSON.parse(await readFile(eventPath, "utf8"));
  if (!Number.isSafeInteger(issue?.number) || typeof issue?.user?.login !== "string" || typeof issue?.html_url !== "string") {
    throw new Error("이슈 번호, 원래 작성자 또는 원본 이슈 링크를 읽을 수 없습니다.");
  }
  const kind = process.env.ACTIVITY_REQUEST_KIND || "register";
  if (!Object.hasOwn(actionLabels, kind)) throw new Error("활동 요청 종류를 구분할 수 없습니다.");
  const answers = parseAnswers(issue.body, formLabels[kind]);
  const source = await readFile(dataPath, "utf8");
  const newline = source.includes("\r\n") ? "\r\n" : "\n";
  let updated;
  let sections;
  if (kind === "register") {
    const record = readDetails(answers, "", `https://github.com/${issue.user.login}`);
    const description = requiredAnswer(answers, "활동 설명");
    const closing = source.match(/\r?\n\];\s*$/);
    const ids = [...source.matchAll(/^\s+id: "l-(\d+)",?$/gm)].map(([, number]) => Number(number));
    if (!source.includes("export const leads: Lead[] = [") || !closing || ids.length === 0) {
      throw new Error("leads.ts의 배열 또는 기존 ID 형식을 읽을 수 없습니다. 운영진이 파일 구조를 확인해주세요.");
    }
    const nextNumber = Math.max(...ids) + 1;
    if (!Number.isSafeInteger(nextNumber)) throw new Error("기존 ID에서 다음 번호를 만들 수 없습니다. 운영진이 ID 형식을 확인해주세요.");
    const entry = { id: `l-${String(nextNumber).padStart(2, "0")}`, ...record };
    updated = source.slice(0, closing.index) + newline + `  ${renderRecord(entry, newline)},` + source.slice(closing.index);
    sections = [
      "## 등록 정보",
      reviewText(`실명: ${record.name}\n모임명: ${record.community}\n학교: ${record.university || "미기재"}\n활동 연도: ${record.year}\n역할: ${requiredAnswer(answers, "역할")}\nID: ${entry.id}`),
      "## 활동 설명", reviewText(description),
      "## 증빙 링크 (선택)", reviewText(answers.get("증빙 링크") || "미제공"),
    ];
  } else {
    const selector = {
      githubUrl: requiredAnswer(answers, "기존 GitHub 링크"),
      community: requiredAnswer(answers, "기존 모임명"),
      year: readYear(answers, "기존 활동 연도"),
      role: readRole(answers, "기존 역할"),
    };
    const target = await findTarget(source, selector);
    if (kind === "update") {
      const after = { ...target.record, ...readDetails(answers, "수정 후 ", requiredAnswer(answers, "수정 후 GitHub 링크")) };
      if (!answers.get("수정 후 학교")) delete after.university;
      const description = requiredAnswer(answers, "수정 내용 설명");
      const lineStart = source.lastIndexOf("\n", target.start - 1) + 1;
      const indent = source.slice(lineStart, target.start).match(/^[ \t]*$/)?.[0] ?? "  ";
      updated = source.slice(0, target.start) + renderRecord(after, newline, indent) + source.slice(target.end);
      sections = [
        "## 변경 전", reviewText(describeRecord(target.record)),
        "## 변경 후", reviewText(describeRecord(after)),
        "## 수정 내용 설명", reviewText(description),
        "## 증빙 링크 (선택)", reviewText(answers.get("증빙 링크") || "미제공"),
      ];
    } else {
      updated = deleteTarget(source, target);
      sections = [
        "## 삭제 대상", reviewText(describeRecord(target.record)),
        ...(answers.get("추가 설명 또는 삭제 사유")
          ? ["## 추가 설명 또는 삭제 사유", reviewText(answers.get("추가 설명 또는 삭제 사유"))]
          : []),
      ];
    }
  }
  if (updated === source) throw new Error("입력한 내용으로 변경되는 데이터가 없습니다. 수정 후 정보를 확인해주세요.");
  const body = [
    kind === "register" ? "## 신청자" : "## 요청자",
    `@${issue.user.login} (원본 이슈 작성자)`,
    ...sections,
    "## 운영진 검토",
    kind === "register"
      ? "활동 사실, 본인 요청 여부, 중복 기록, 학교 표기와 증빙은 운영진이 직접 확인해주세요. 동시에 열린 등록 PR의 ID도 확인해주세요."
      : "활동 사실, 본인 요청 여부, 대상 기록, 증빙과 등록 정책에 맞는지는 운영진이 직접 확인해주세요.",
    "설명·사유·증빙은 검토용이며 사이트 데이터에는 포함하지 않습니다. 운영진이 검토 후 직접 머지합니다.",
    `원본 이슈: ${issue.html_url}`,
    `Closes #${issue.number}`,
    "",
  ].join("\n\n");

  // 파싱과 변환이 모두 끝난 뒤에만 쓴다. PR 본문은 저장소 밖의 임시 파일로 전달한다.
  await writeFile(bodyPath, body, "utf8");
  await writeFile(dataPath, updated, "utf8");
  console.log(`이슈 #${issue.number}의 활동 ${actionLabels[kind]} 요청을 반영했습니다. 운영진 검토가 필요합니다.`);
}

run().catch(async (error) => {
  console.error(`활동 요청 변환 실패: ${error.message}`);
  if (process.env.ACTIVITY_ERROR_PATH) {
    await writeFile(process.env.ACTIVITY_ERROR_PATH, error.message, "utf8").catch(() => {});
  }
  process.exitCode = 1;
});
