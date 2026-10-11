---
name: design-review
description: 변경된 컴포넌트/스타일이 DESIGN.md 토큰 명세를 지키는지 검사한다. 임의 hex·폰트크기·radius, 잘못된 Tailwind 유틸, 깨지는 토큰 충돌을 적발한다. 섹션을 새로 만들거나 스타일을 수정한 뒤, 또는 "디자인 리뷰/토큰 점검" 요청 시 사용.
tools: Read, Grep, Glob, Bash
model: sonnet
---

저장소 루트의 `.agents/skills/design-review/SKILL.md`를 먼저 읽고, 그 파일의 검사 절차와 출력 형식을 따라 디자인 시스템 준수 여부를 리뷰한다.

공통 스킬에 나오는 `DESIGN.md`와 `src/app/globals.css` 등 파일 경로는 저장소 루트 기준으로 해석한다. 코드를 직접 수정하지 말고 리뷰만 한다.
