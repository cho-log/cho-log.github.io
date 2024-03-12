import clsx from 'clsx';

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'lineicons/web-font/lineicons.css';

export default function Topic({ odd }) {
  return (
      <section id="topic" className={clsx({ 'section-bg-gray': odd, 'section-bg-white': !odd })}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h1 className="fw-bold text-center mb-5">스터디 주제</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-feature">
                <i className="lni lni-java"></i>
                <h3>자바 기초</h3>
                <p>
                  자바 언어를 이제 막 시작하는 입문자 대상<br /><br />
                  - 동작 검증을 위한 단위 테스트<br />
                  - 간단한 콘솔 애플리케이션 구현<br />
                  - 유지보수하기 좋은 클린 코드<br />
                  - 함수형 프로그래밍 문법 활용<br />

                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-feature coming-soon">
                <i className="lni lni-java"></i>
                <h3>자바 심화(준비중)</h3>
                <p>
                  자바 언어를 풍부하게 활용하고 싶은 사람 대상<br /><br />
                  - 제네릭 문법 활용<br />
                  - JCF 프레임워크 동작 이해<br />
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-feature">
                <i className="lni lni-leaf"></i>
                <h3>스프링 입문</h3>
                <p>
                  스프링을 처음 접하는 스프링 입문자 대상 <br /> <br />
                  - 웹 요청과 응답 처리를 위한 Spring MVC의 기능 <br />
                  - 데이터베이스 접근을 위한 Spring JDBC <br />
                  - 스프링의 객체 관리 기능을 위한 Spring Core <br />
                  - 기본적인 스프링 애플리케이션의 구조인 Layered Architecture

                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-feature">
                <i className="lni lni-flower"></i>
                <h3>스프링 기초</h3>
                <p>
                  웹 프로젝트를 위한 배경 지식이 필요한 사람<br /><br />
                  - Spring 기반의 인증을 구현 <br />
                  - 데이터베이스 접근을 위한 Spring Data JPA <br />
                  - 스프링의 객체 그리고 외부 설정 관리를 위한 Spring Core <br />
                  - 간단한 애플리케이션 운동을 위한 배포 스크립트
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-feature coming-soon">
                <i className="lni lni-arrow-right-circle"></i>
                <h3>스프링 심화 - 외부 API 호출(준비중)</h3>
                <p>
                  스프링 웹 애플리케이션에서 외부 호출에 대한 경험이 필요한 사람<br /><br />
                  - 외부 API 호출 기능<br/>
                  - 서킷 브레이커 활용<br/>
                  - Fake 테스트
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}