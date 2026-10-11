# 초록 🌱

배움에서 나눔으로 이어지는 개발자 커뮤니티, 초록의 소개와 활동 아카이브입니다.

- [초록 홈페이지](https://cho-log.github.io/)
- [함께한 모임 & 사람들](https://cho-log.github.io/archive)
- [기여 가이드](CONTRIBUTING.md)

## 아카이브에 나를 추가하기

초록스터디 리드·리뷰어, 초록해듀오 멘토로 활동했다면 PR로 자신의 기록을 등록하거나 수정할 수 있습니다. 작은 데이터 기여도 환영합니다.

1. 먼저 [아카이브](https://cho-log.github.io/archive)에 자신의 활동 기록이 있는지 확인합니다.
2. 이 저장소를 Fork하고 [`src/data/leads.ts`](src/data/leads.ts)의 `leads` 배열에 자신의 항목을 추가합니다.
3. [기여 가이드의 예시와 규칙](CONTRIBUTING.md#등록할-데이터)을 참고해 `main`으로 PR을 보냅니다.
4. 운영진이 활동 기록과 정보 공개 동의를 확인하고 머지합니다.
5. 머지 후 GitHub Pages 배포가 성공하면 사이트에 반영됩니다.

`leads.ts`는 JSON 파일이 아닌 TypeScript 데이터 파일입니다. 프로필 이미지는 GitHub 계정에서 가져오므로 별도로 업로드하지 않아도 됩니다.

## 로컬 실행

Node.js 24와 npm을 사용합니다. nvm을 사용한다면 `nvm use`로 프로젝트 버전을 선택할 수 있습니다.

```bash
npm ci
npm run dev
```

브라우저에서 <http://localhost:3000/archive>를 열어 변경한 기록을 확인합니다.

```bash
npm run validate:leads
npm run test:data
npm run lint
npm run build
```

`npm run build`는 데이터 검증과 이미지 placeholder 생성을 거쳐 정적 사이트를 `out/`에 만듭니다. 정적 결과는 `npm run start` 대신 정적 파일 서버로 확인합니다.

## 저장소 안내

| 경로 | 내용 |
| --- | --- |
| `src/data/leads.ts` | 리드·멘토·리뷰어 활동 기록 |
| `src/data/testimonials.ts` | 활동 후기 |
| `src/data/programs.ts` | 프로그램 타임라인 |
| `src/types/index.ts` | 데이터 필드와 역할 타입 |
| `DESIGN.md` | 디자인 토큰과 컴포넌트 가이드 |
| `.github/workflows/ci.yml` | PR 데이터 검증·테스트·린트·빌드 |
| `.github/workflows/deploy.yml` | `main` 변경 시 GitHub Pages 배포 |

화면이나 기능 개선도 PR로 제안할 수 있습니다. 스타일을 바꿀 때는 [디자인 시스템](DESIGN.md)을 먼저 확인해주세요. 운영진의 리뷰 및 GitHub 설정 절차는 [운영 가이드](docs/MAINTAINERS.md)에 정리되어 있습니다.
