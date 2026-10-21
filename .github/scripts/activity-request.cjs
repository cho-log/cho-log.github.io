// eslint-disable-next-line @typescript-eslint/no-require-imports -- github-script에서 불러오는 CommonJS 파일
const { readFile, writeFile } = require('node:fs/promises');

function getRequests(number) {
  return [
    { kind: 'register', label: 'archive-registration', action: '등록', branch: `archive/issue-${number}` },
    { kind: 'update', label: 'archive-update', action: '수정', branch: `archive/update-issue-${number}` },
    { kind: 'delete', label: 'archive-delete', action: '삭제', branch: `archive/delete-issue-${number}` },
  ];
}

async function readCurrentRequest({ github, context }) {
  const requests = getRequests(context.issue.number);
  // 재실행 때도 최신 본문·라벨과 원래 이슈 작성자를 API에서 읽는다.
  const { data: issue } = await github.rest.issues.get({ ...context.repo, issue_number: context.issue.number });
  const matches = requests.filter(request => issue.labels.some(label => label.name === request.label));
  return { issue, requests, matches };
}

async function readPullRequestState({ github, context, requests, branch }) {
  // 같은 이슈에서 라벨을 바꾸더라도 종료된 PR이나 다른 종류의 PR을 중복 생성하지 않는다.
  const pulls = (await Promise.all(requests.map(request => github.paginate(github.rest.pulls.list, {
    ...context.repo, head: `${context.repo.owner}:${request.branch}`, state: 'all', per_page: 100,
  })))).flat();
  if (pulls.some(pull => pull.state === 'closed')) return 'closed';
  if (pulls.some(pull => pull.head.ref !== branch)) return 'other-request';
  return 'eligible';
}

async function prepare({ github, context, core }) {
  const { issue, requests, matches } = await readCurrentRequest({ github, context });
  if (issue.state !== 'open' || matches.length === 0) {
    core.info('닫힌 이슈이거나 활동 요청 라벨이 없어 처리하지 않습니다.');
    return;
  }
  if (matches.length !== 1) {
    const reason = '활동 요청 라벨이 여러 개라 요청 종류를 정할 수 없습니다. 등록·수정·삭제 중 해당하는 라벨 하나만 남겨주세요.';
    core.setOutput('reason', reason);
    core.setFailed(reason);
    return;
  }
  const request = matches[0];
  core.setOutput('kind', request.kind);
  core.setOutput('label', request.label);
  core.setOutput('action_label', request.action);
  core.setOutput('branch', request.branch);
  const pullState = await readPullRequestState({ github, context, requests, branch: request.branch });
  if (pullState === 'closed') {
    core.info('이 요청의 PR이 이미 닫혔거나 머지되어 새 PR을 만들지 않습니다.');
    return;
  }
  if (pullState === 'other-request') {
    const reason = '이 이슈에는 다른 요청 종류의 PR이 이미 열려 있습니다. 기존 요청 라벨과 PR을 운영진이 확인해주세요.';
    core.setOutput('reason', reason);
    core.setFailed(reason);
    return;
  }
  await writeFile(process.env.REGISTRATION_EVENT_PATH, JSON.stringify({ issue }), 'utf8');
  core.setOutput('eligible', 'true');
}

async function recheck({ github, context, core }) {
  const { issue, requests, matches } = await readCurrentRequest({ github, context });
  if (issue.state !== 'open' || matches.length === 0) {
    core.info('요청이 종료되었거나 라벨이 제거되어 PR 생성을 생략합니다.');
    return;
  }
  if (matches.length !== 1 || matches[0].label !== process.env.REQUEST_LABEL) {
    const reason = '처리 중 활동 요청 라벨이 바뀌었습니다. 요청 종류를 확인한 뒤 전체 작업을 다시 실행해주세요.';
    core.setOutput('reason', reason);
    core.setFailed(reason);
    return;
  }
  const pullState = await readPullRequestState({ github, context, requests, branch: process.env.REQUEST_BRANCH });
  if (pullState === 'closed') {
    core.info('이 요청의 PR이 이미 닫혔거나 머지되어 PR 생성을 생략합니다.');
    return;
  }
  if (pullState === 'other-request') {
    const reason = '이 이슈에 다른 요청 종류의 PR이 열려 있어 새 PR을 만들지 않았습니다. 운영진이 기존 PR을 확인해주세요.';
    core.setOutput('reason', reason);
    core.setFailed(reason);
    return;
  }
  core.setOutput('eligible', 'true');
}

async function notify({ github, context }) {
  const marker = '<!-- archive-registration-result -->';
  const action = process.env.REQUEST_ACTION || '요청';
  let message;
  if (process.env.RUN_STATUS === 'success' && process.env.PR_URL) {
    message = `활동 ${action} PR을 만들거나 갱신했습니다: ${process.env.PR_URL}\n\n운영진이 활동 사실, 본인 요청 여부, 대상 기록과 증빙을 검토한 뒤 직접 머지합니다.`;
  } else if (process.env.REQUEST_ERROR) {
    message = process.env.REQUEST_ERROR;
  } else if (process.env.CONVERT_OUTCOME === 'failure') {
    const reason = await readFile(process.env.ACTIVITY_ERROR_PATH, 'utf8').catch(() => '실행 로그에서 자세한 이유를 확인해주세요.');
    message = `양식 내용을 활동 데이터에 반영하지 못했습니다.\n\n사유: ${reason}\n\n이슈 본문의 항목 제목과 응답을 확인해주세요.`;
  } else if (process.env.PR_OUTCOME === 'failure') {
    message = `활동 ${action} PR을 만들거나 갱신하지 못했습니다. 운영진이 Actions의 PR 생성 허용, 토큰 권한과 브랜치 규칙을 확인해주세요.`;
  } else {
    message = '활동 요청 자동 처리를 완료하지 못했습니다. 운영진이 아래 실행 로그에서 실패한 단계를 확인해주세요.';
  }
  const body = [
    marker,
    message,
    `실행 로그: ${process.env.RUN_URL}`,
    '내용 또는 설정을 고친 뒤, 운영진이 이 실행에서 **Re-run all jobs**를 선택하면 최신 이슈 본문으로 다시 처리합니다. 이슈가 열려 있어야 하며, PR이 이미 있다면 그 PR도 열려 있어야 합니다. 닫히거나 머지된 PR이 있으면 새 PR을 만들지 않습니다.',
  ].join('\n\n');
  const comments = await github.paginate(github.rest.issues.listComments, {
    ...context.repo, issue_number: context.issue.number, per_page: 100,
  });
  const previous = comments.find(comment => comment.user?.login === 'github-actions[bot]' && comment.body?.startsWith(marker));
  if (previous) {
    await github.rest.issues.updateComment({ ...context.repo, comment_id: previous.id, body });
  } else {
    await github.rest.issues.createComment({ ...context.repo, issue_number: context.issue.number, body });
  }
}

module.exports = { prepare, recheck, notify };
