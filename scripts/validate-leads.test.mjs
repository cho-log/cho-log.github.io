import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { parseLeads, validateLeads } from "./validate-leads.mjs";

const entry = {
  id: "octocat-2026-lead",
  name: "홍길동",
  community: "그리디",
  year: 2026,
  githubUrl: "https://github.com/octocat",
  role: "lead",
};
const check = (entries) => validateLeads(entries, 2026);

test("기존 아카이브 데이터를 직접 읽어 검증한다", async () => {
  const source = await readFile(new URL("../src/data/leads.ts", import.meta.url), "utf8");
  assert.deepEqual(validateLeads(parseLeads(source)), []);
});

test("대학 생략 및 기존 순번 ID를 허용한다", () => {
  assert.deepEqual(check([entry, {
    ...entry, id: "l-65", githubUrl: "https://github.com/another-user", university: "세종대",
  }]), []);
});

test("여러 연도·모임·역할의 활동을 별도로 등록할 수 있다", () => {
  assert.deepEqual(check([
    entry,
    { ...entry, id: "octocat-2025-lead", year: 2025 },
    { ...entry, id: "octocat-2026-reviewer", role: "reviewer" },
    { ...entry, id: "octocat-2026-lead-scg", community: "SCG" },
    { ...entry, id: "octocat-2026-mentor", role: "mentor", community: "초록해듀오" },
  ]), []);
});

test("같은 ID와 대소문자가 다른 동일 계정의 활동 중복을 거부한다", () => {
  assert.ok(check([entry, { ...entry, year: 2025 }]).some((error) => error.includes("id '")));
  assert.ok(check([entry, { ...entry, id: "l-65", githubUrl: "https://github.com/Octocat" }])
    .some((error) => error.includes("같은 계정·연도·소속·역할")));
});

test("빈 데이터·누락/빈 필드·공백·불필요한 개인정보 필드를 거부한다", () => {
  assert.ok(check([]).length);
  for (const key of ["id", "name", "community", "githubUrl", "role"]) {
    const missing = { ...entry };
    delete missing[key];
    assert.ok(check([missing]).some((error) => error.includes(key)));
    assert.ok(check([{ ...entry, [key]: "" }]).some((error) => error.includes(key)));
  }
  for (const change of [{ name: " 홍길동" }, { community: "그리디\n" }, { university: "" }, { email: "private@example.com" }]) {
    assert.ok(check([{ ...entry, ...change }]).length);
  }
});

test("미래·소수·문자열 연도와 잘못된 역할·ID를 거부한다", () => {
  for (const year of [2022, 2027, 2026.5, "2026", undefined]) {
    assert.ok(check([{ ...entry, year }]).some((error) => error.includes("year")));
  }
  assert.ok(check([{ ...entry, role: "member" }]).some((error) => error.includes("role")));
  assert.ok(check([{ ...entry, id: "Octocat 2026" }]).some((error) => error.includes("id")));
});

test("프로필 이미지 경로를 깨뜨리는 URL과 외부 URL을 거부한다", () => {
  for (const githubUrl of [
    "http://github.com/octocat", "https://github.com/octocat/",
    "https://github.com/octocat/repo", "https://github.com/octocat?tab=repositories",
    "https://github.com/octocat#profile", "https://github.com.evil.example/octocat",
    "https://example.com/octocat", "javascript:alert(1)",
  ]) {
    assert.ok(check([{ ...entry, githubUrl }]).some((error) => error.includes("githubUrl")), githubUrl);
  }
});

test("형식 오류·스프레드·함수 호출·중복 필드를 데이터로 실행하지 않는다", () => {
  for (const source of [
    "export const leads = [", "const leads = [];",
    "export const leads = getLeads();", "export const leads = [...other];",
    "export const leads = [{ ...other }];", "export const leads = [{ name: getName() }];",
    "export const leads = [{ name: 'A', name: 'B' }];",
  ]) {
    assert.throws(() => parseLeads(source));
  }
});
