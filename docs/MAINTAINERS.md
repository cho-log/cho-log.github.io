# 아카이브 운영 가이드

## 등록 PR 리뷰

1. 본인 요청인지, 대리 요청이라면 당사자 동의를 확인했는지 확인합니다. 삭제 요청은 본인 요청 여부를 확인합니다.
2. 초록스터디 리드·리뷰어 또는 초록해듀오 멘토 활동 당시 소속·연도·역할을 확인합니다.
3. GitHub 링크가 해당 사람의 개인 프로필인지 확인합니다. 자동 검사는 URL 형식만 확인하며 계정의 존재와 소유 여부를 확인하지 않습니다.
4. 같은 계정·연도·소속·역할의 중복 등록인지 확인합니다. 다른 연도·모임·역할의 기록은 허용합니다.
5. 데이터 등록 PR에 불필요한 코드·설정 변경이나 다른 사람의 기록 변경이 섞여 있지 않은지 확인합니다.
6. `Archive checks` 통과와 리뷰 대화 해결을 확인하고 운영진 1명이 승인합니다. 작성자가 운영진이어도 다른 운영진이 승인합니다.
7. 운영진이 머지하고 기존 `Deploy Next.js site to Pages` 워크플로의 배포 결과를 확인합니다.

`.github/CODEOWNERS`에 운영진 7명을 지정했습니다. 리뷰 담당 계정은 `@javajigi`, `@boorownie`, `@byjo`, `@jaeyeonling`, `@yesjuhee`, `@2Jin1031`, `@boyekim`입니다. 인원이 바뀌면 CODEOWNERS를 수정하고 해당 계정이 저장소의 write 이상 권한을 갖는지 확인합니다. 승인 1명은 7명 중 어느 한 명이면 됩니다.

처음 기여하는 외부 Fork의 PR은 GitHub Actions 실행 승인 대기 상태가 될 수 있습니다. 변경 내용을 먼저 확인하고 **Approve and run**으로 검사를 시작합니다. 이는 PR 승인과 별도입니다. CI는 `pull_request` 이벤트와 `contents: read` 권한으로 실행하며 배포 권한은 기존 배포 워크플로에만 둡니다.

## main ruleset 최초 설정

권장 설정은 [`.github/rulesets/main.json`](../.github/rulesets/main.json)에 준비했습니다. 이 파일은 **초안이며, 파일을 커밋하는 것만으로 GitHub 규칙이 적용되지는 않습니다**. `enforcement`는 `disabled`로 저장되어 있습니다.

| 설정 | 값 |
| --- | --- |
| 대상 브랜치 | `main` |
| PR을 통한 변경 | 필수 |
| 승인 | 운영진 CODEOWNER 1명 |
| 변경 커밋 추가 시 기존 승인 | 취소 후 재승인 |
| 미해결 리뷰 대화 | 해결 필수 |
| 필수 검사 | GitHub Actions의 `Archive checks` |
| 최신 `main` 기준 검사 | 필수 |
| 브랜치 삭제·강제 push | 금지 |
| 규칙 우회 | 지정하지 않음 |

처음 활성화할 때는 다음 순서를 따릅니다.

1. 기여 가이드·CODEOWNERS·CI를 포함한 PR에서 `Archive checks`가 통과하는지 확인합니다.
2. 운영진 리뷰를 거쳐 이 PR을 `main`에 머지하고, `main`의 CI와 Pages 배포 성공을 확인합니다.
3. 저장소 **Settings → Rules → Rulesets → New ruleset → Import a ruleset**에서 `main.json`을 가져옵니다.
4. 대상이 `main`인지, 필수 검사가 `Archive checks`이고 제공 앱이 GitHub Actions인지, CODEOWNER 승인 1명인지 확인합니다.
5. Enforcement status를 **Active**로 바꾸고 저장합니다.
6. 다음 등록 PR에서 운영진 리뷰 요청·검사·승인 조건이 표시되는지 확인합니다.

CI가 등록되기 전에 필수 검사 규칙을 켜면 검사 대기 상태로 머지가 막힐 수 있으므로 위 순서를 따릅니다. CODEOWNERS와 PR 템플릿은 기본 브랜치에 반영된 뒤 사용됩니다. 운영진의 PR도 같은 규칙을 적용합니다.

## 공개 기여와 라이선스

이번 구성은 아카이브에 PR로 기여할 수 있는 절차를 엽니다. 저장소에는 아직 라이선스가 없습니다. 코드 재사용까지 허용하는 오픈소스로 배포하려면 코드의 라이선스를 별도로 결정하고 `LICENSE`를 추가합니다. 사진·로고·개인 프로필·후기의 이용 범위도 코드와 함께 일괄 지정하기 전에 확인합니다.

## 관련 GitHub 문서

- [기여 가이드 설정](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)
- [공개 저장소의 라이선스](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)
- [CODEOWNERS와 리뷰 요청](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
- [ruleset 생성·가져오기](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository)
- [ruleset의 필수 PR·승인·검사 규칙](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets)
- [Fork PR의 워크플로 실행](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request)
