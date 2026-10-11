import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const DATA_FILE = new URL("../src/data/leads.ts", import.meta.url);
const FIELDS = new Set([
  "id", "name", "community", "university", "year", "githubUrl", "role",
]);
const ROLES = new Set(["lead", "mentor", "reviewer"]);
const PROFILE_URL = /^https:\/\/github\.com\/([a-z\d]+(?:-[a-z\d]+)*)$/i;

// 데이터 파일을 실행하지 않고 명시적으로 작성한 배열·객체·문자열·숫자만 읽는다.
export function parseLeads(source) {
  const file = ts.createSourceFile("leads.ts", source, ts.ScriptTarget.Latest, true);
  if (file.parseDiagnostics.length) {
    throw new Error(ts.flattenDiagnosticMessageText(file.parseDiagnostics[0].messageText, "\n"));
  }

  const declarations = file.statements
    .filter((statement) => ts.isVariableStatement(statement)
      && statement.modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword))
    .flatMap((statement) => statement.declarationList.declarations)
    .filter((declaration) => ts.isIdentifier(declaration.name) && declaration.name.text === "leads");
  const array = declarations[0]?.initializer;
  if (declarations.length !== 1 || !array || !ts.isArrayLiteralExpression(array)) {
    throw new Error("export const leads: Lead[] = [...] 형식으로 작성해주세요.");
  }

  return array.elements.map((element, index) => {
    if (!ts.isObjectLiteralExpression(element)) {
      throw new Error(`${index + 1}번째 항목: 객체를 직접 작성해주세요. 스프레드나 함수는 사용하지 않습니다.`);
    }
    const entry = Object.create(null);
    for (const property of element.properties) {
      if (!ts.isPropertyAssignment(property)
        || !(ts.isIdentifier(property.name) || ts.isStringLiteral(property.name))) {
        throw new Error(`${index + 1}번째 항목: 필드를 '이름: 값' 형식으로 작성해주세요.`);
      }
      const key = property.name.text;
      if (Object.hasOwn(entry, key)) {
        throw new Error(`${index + 1}번째 항목: ${key} 필드가 중복되었습니다.`);
      }
      const value = property.initializer;
      if (ts.isStringLiteral(value)) entry[key] = value.text;
      else if (ts.isNumericLiteral(value)) entry[key] = Number(value.text);
      else throw new Error(`${index + 1}번째 항목: ${key} 값은 문자열 또는 숫자로 직접 작성해주세요.`);
    }
    return entry;
  });
}

export function validateLeads(entries, currentYear = Number(new Intl.DateTimeFormat("en", {
  timeZone: "Asia/Seoul", year: "numeric",
}).format(new Date()))) {
  const errors = [];
  const ids = new Map();
  const activities = new Map();

  if (!Array.isArray(entries) || entries.length === 0) {
    return ["leads에는 하나 이상의 활동 기록이 있어야 합니다."];
  }

  entries.forEach((entry, index) => {
    const label = `${index + 1}번째 항목`;
    if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
      errors.push(`${label}: 객체 형식이어야 합니다.`);
      return;
    }
    for (const key of Object.keys(entry)) {
      if (!FIELDS.has(key)) errors.push(`${label}: 지원하지 않는 필드 '${key}'입니다.`);
    }
    for (const key of ["id", "name", "community", "githubUrl", "role", ...(Object.hasOwn(entry, "university") ? ["university"] : [])]) {
      const value = entry[key];
      if (typeof value !== "string" || !value.trim() || value !== value.trim() || /[\r\n\t]/.test(value)) {
        errors.push(`${label}: ${key}는 앞뒤 공백이나 줄바꿈이 없는 빈 문자열이 아닌 값이어야 합니다.`);
      }
    }
    if (typeof entry.id === "string") {
      if (!/^[a-z\d]+(?:-[a-z\d]+)*$/.test(entry.id)) {
        errors.push(`${label}: id에는 영문 소문자·숫자·하이픈만 사용해주세요.`);
      }
      if (ids.has(entry.id)) errors.push(`${label}: id '${entry.id}'가 ${ids.get(entry.id)}번째 항목과 중복되었습니다.`);
      else ids.set(entry.id, index + 1);
    }
    if (!Number.isInteger(entry.year) || entry.year < 2023 || entry.year > currentYear) {
      errors.push(`${label}: year는 2023~${currentYear} 사이의 활동 연도 숫자여야 합니다.`);
    }
    if (!ROLES.has(entry.role)) errors.push(`${label}: role은 lead, mentor, reviewer 중 하나여야 합니다.`);

    const profile = typeof entry.githubUrl === "string" ? entry.githubUrl.match(PROFILE_URL) : null;
    if (!profile || profile[1].length > 39) {
      errors.push(`${label}: githubUrl은 https://github.com/아이디 형식의 개인 프로필 주소여야 합니다. 끝의 '/'나 저장소 경로를 제거해주세요.`);
    }
    if (profile && typeof entry.community === "string" && ROLES.has(entry.role) && Number.isInteger(entry.year)) {
      const key = JSON.stringify([
        profile[1].toLowerCase(), entry.year,
        entry.community.normalize("NFC").trim().toLowerCase(), entry.role,
      ]);
      if (activities.has(key)) errors.push(`${label}: 같은 계정·연도·소속·역할이 ${activities.get(key)}번째 항목에 이미 등록되어 있습니다.`);
      else activities.set(key, index + 1);
    }
  });
  return errors;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const entries = parseLeads(await readFile(DATA_FILE, "utf8"));
    const errors = validateLeads(entries);
    if (errors.length) {
      console.error(`아카이브 데이터 검증 실패:\n${errors.map((error) => `- ${error}`).join("\n")}`);
      process.exitCode = 1;
    } else {
      console.log(`아카이브 데이터 ${entries.length}개 검증 완료`);
    }
  } catch (error) {
    console.error(`아카이브 데이터 검증 실패: ${error.message}`);
    process.exitCode = 1;
  }
}
