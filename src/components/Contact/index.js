import clsx from 'clsx';

export default function Contact({ odd }) {
  return (
      <section id="contact" className="hero hero--primary">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h1 className="fw-bold text-center mb-5">초록 스터디 참여 방법</h1>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-12">
              <p className="text-light">
                초록 스터디는 그룹 형태로 운영되는 스터디를 지원하고 있습니다.
                <br />
                개인적으로 참여를 희망하는 분들에 대한 지원은 준비중이니 조금만 기다려주세요.
                <br />
                <br />
                현재 초록스터디는 3기가 진행중입니다.
                <br />
                3기까지는 우아한테크코스 수료생 중 스터디 개설을 희망하는 사람을 대상으로 진행하고 있습니다.
                <br />
                컨텐츠가 안정이되면 외부 그룹 대상으로도 확장 계획이 있습니다.
                <br /><br /><br />
                초록 스터디에 대해 궁금한 점이 있거나 참여를 희망하시면 디스코드에 놀러오세요 :)
              </p>
            </div>
          </div>
          <div className="row text-center mt-3">
            <div className="col-12">
              <a target="_blank" href="https://discord.gg/6XkAFe8DwW" className="btn btn-outline-light">디스코드 놀러가기</a>
            </div>
          </div>
        </div>
      </section>
  );
}