import clsx from 'clsx';
import styles from "./index.module.css";

import '../../css/bootstrap.min.css';
import '../../css/custom.css';

export default function Header() {
  return (
      <header className={clsx('hero hero--primary page', styles.heroBanner)}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-6 mt-5 mb-5"> {/* Adjusted for responsiveness */}
              <h1 className="fs-4 mb-5"></h1>
              <h1 className="fs-4 fw-bold mb-3">초록 스터디가 제공하는</h1>
              <h1 className="fs-4 fw-bold mb-3">다양한 학습 컨텐츠를 활용하여</h1>
              <h1 className="fs-4 fw-bold mb-5">학습을 시작해 보세요</h1>
              <a href="#overview" className="btn btn-outline-light">더 알아보기</a>
            </div>
            <div className="col-md-12 col-lg-6 mt-5 mb-5"> {/* Adjusted for responsiveness */}
              <img src="/img/cholog-main.png" className="d-block mx-auto w-100 h-auto rounded" style={{maxHeight: '400px'}} alt="Community" />
            </div>
          </div>
        </div>
      </header>
  );
}