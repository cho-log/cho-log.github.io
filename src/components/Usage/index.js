import clsx from 'clsx';

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'lineicons/web-font/lineicons.css';

export default function Usage({ odd }) {
  return (
      <section id="usage" className={clsx({ 'section-bg-gray': odd, 'section-bg-white': !odd })}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h1 className="fw-bold text-center mb-5">학습 자료 활용 방법</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-0 col-12"></div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-usage border">
                <img className="p-5" src="/img/users.png" alt="#"/>
                <div className="p-4 border">
                  <div className="row align-items-center">
                    <div className="col-lg-12 col-12">
                      <h5 className="fw-bold">그룹 학습</h5>
                      <p>
                        스터디원들로만 구성된 스터디 <br/><br/>
                        스터디원들과 함께 학습 테스트와 미션 수행합니다. 페어로 진행하거나 진행 상황을 공유하면서 학습 할 수 있습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-usage border">
                <img className="p-5" src="/img/course.png" alt="#"/>
                <div className="p-4 border">
                  <div className="row align-items-center">
                    <div className="col-lg-12 col-12">
                      <h5 className="fw-bold">멘토 학습</h5>
                      <p>
                        멘토와 스터디원으로 구성된 스터디<br/><br/>
                        학습 테스트와 미션 수행한 내용을 멘토에게 리뷰 요청을 하고, 멘토의 피드백을 통해 학습을 진행합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-0 col-12">

            </div>
          </div>
        </div>
      </section>
  );
}