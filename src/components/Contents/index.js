import clsx from 'clsx';

import styles from './styles.module.css';

export default function Contents({ odd }) {
  return (
      <section id="contents" className={clsx({ 'section-bg-gray': odd, 'section-bg-white': !odd })}>
        <div className="container">
          <div className="section-title">
            <h1 className="text-center fw-bold" data-wow-delay=".2s">
              학습 자료
            </h1>
          </div>
          <div className="row align-items-center my-5">
            <div className="col-lg-6 col-md-12 col-12">
              <h3 className="fw-bold mb-3">키워드와 실습 자료</h3>
              <p className="mb-3">
                초록 스터디는 학습에 필요한 내용을 전부 알려주지 않습니다.
                학습해야 할 내용을 스스로 공부할 수 있는 도움만 드립니다. 웹
                애플리케이션 제작에 필요한 개념이나 키워드를 문서를 통해
                전달하고 이해를 돕기 위한 실습 환경을 제공합니다.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <img className="mb-3" src="/img/practice.png" alt="#"/>
            </div>
          </div>
          <div className={clsx('row align-items-center my-5', styles.reverse)}>
            <div className="col-lg-6 col-md-12 col-12">
              <img
                  className="mb-3"
                  src="/img/learning-test.png"
                  alt="#"
              />
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <h3 className="fw-bold mb-3">학습 테스트</h3>
              <p className="mb-3">
                언어나 프레임워크의 기능을 익히기 위해 학습 테스트를
                제공합니다. 제공되는 학습 테스트를 직접 실행해보고 변형해
                보면서 기능에 대한 이해도를 향상시켜보세요.
              </p>
              <div className="button mb-3 w-100">
                <a href="https://github.com/cho-log/spring-learning-test" target="_blank" className="btn btn-dark m-2">스프링 학습 테스트</a>
                <a href="https://github.com/cho-log/java-learning-test" target="_blank" className="btn btn-dark">자바 학습 테스트</a>
              </div>
            </div>
          </div>
          <div className="row align-items-center my-5">
            <div className="col-lg-6 col-md-12 col-12">
              <h3 className="fw-bold mb-3">미니 프로젝트 요구사항</h3>
              <p className="mb-3">
                학습한 내용을 활용해볼 수 있는 미니 프로젝트의 요구사항을
                제공합니다. 실습과 학습 테스트를 통해 학습한 내용을 직접
                구현해보면서 익힐 수 있습니다.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <img className="mb-3" src="/img/mission.png" alt="#"/>
            </div>
          </div>
        </div>
      </section>
  );
}

