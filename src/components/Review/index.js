import clsx from 'clsx';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

export default function Review({ odd }) {
  return (
      <section id="review" className={clsx({ 'section-bg-gray': odd, 'section-bg-white': !odd })}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h1 className="fw-bold text-center mb-5">후기</h1>
              </div>
            </div>
          </div>
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                      aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                      aria-label="Slide 2"></button>
            </div>
            <div className="row">
              <div className="col-2">
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
              </div>
              <div className="col-8 mb-5">
                <div className="carousel-item text-center active">
                  <div className="carousel-caption">
                    <p className="fs-4 fw-bold">
                      "코드를 작성하는 데 ‘이 방법이 정답이다’라고 직접 알려주지 않고, <br/>
                      스스로 이것저것 찾아보고 적용할 수 있는 기회를 제공해줘서 좋았어요. <br/>
                      스프링을 처음 접하시는 분께 강추합니다!"
                    </p>
                  </div>
                  <div className="author">
                    <img src="/img/review/juno.png" alt="#"/>
                      <h4 className="fs-6 fw-bold mt-2">최준호(주노)</h4>
                      <span>한기대 BCSDLab</span>
                  </div>
                </div>
                <div className="carousel-item text-center">
                  <div className="carousel-caption">
                    <p className="fs-4 fw-bold">
                      "초록 스터디를 통해 정답과 성공보다는 실패로부터 얻는 경험의 가치를 알았습니다.<br/>
                      스프링을 단순히 사용만하는 것이 아니라 왜 사용하는지에 대한 깊은 이해를 할 수 있는 좋은 경험이었습니다."
                    </p>
                  </div>
                  <div className="author">
                    <img src="/img/review/amaranth.avif" alt="#"/>
                    <h4 className="fs-6 fw-bold mt-2">송세연(아마란스)</h4>
                    <span>부산대 BDD</span>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}