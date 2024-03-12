import clsx from 'clsx';

export default function Overview({ odd }) {
  return (
      <section id="overview" className={clsx({ 'section-bg-gray': odd, 'section-bg-white': !odd })}>
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <div className="section-title">
                <h2 className="fw-bold text-center mb-5">
                  스터디 운영이 고민이신가요?
                </h2>
                <p className="text-center mb-5">
                  그룹 스터디를 진행하고 싶은데 어떻게 시작해야 할 지 막막하신가요? <br/><br/>
                  초록 스터디에서는 스터디를 진행하는데 필요한 학습 자료를 제공합니다.<br/>
                  그리고 초록 스터디 커뮤니티에서 서로의 경험을 공유하고 도움을 받을 수 있습니다.<br/><br/>
                  성공적인 프로젝트 온보딩에 필요한 다양한 지식과 경험을 습득해보세요.
                </p>
                <img className="text-center" src="/img/people.png" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', maxHeight: '400px'}}/>
              </div>

            </div>
            {/*<div className="col-lg-6 col-md-12 col-12">*/}
            {/*  <img className="mb-4" src="/img/practice.png" alt="#"/>*/}
            {/*  <h5 className="fs-5 fw-bold text-center"> 학습 자료 </h5>*/}
            {/*</div>*/}
            {/*<div className="col-lg-6 col-md-12 col-12">*/}
            {/*  <img className="mb-4" src="/img/practice.png" alt="#"/>*/}
            {/*  <h5 className="fs-5 fw-bold text-center"> 커뮤니티 활동 </h5>*/}
            {/*</div>*/}
          </div>
        </div>
      </section>
  );
}