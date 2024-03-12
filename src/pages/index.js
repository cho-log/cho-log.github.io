import { useEffect } from "react";

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import 'bootstrap/dist/css/bootstrap.min.css'

import Header from "../components/Header";
import Overview from "../components/Overview";
import Contents from "../components/Contents";
import Topic from "../components/Topic";
import Usage from "../components/Usage";
import Review from "../components/Review";
import Contact from "../components/Contact";

export default function Home() {
  useEffect(() => {
    // 서버 사이드 렌더링에서는 실행되지 않음

    require('bootstrap');
  }, []);

  const {siteConfig} = useDocusaurusContext();
  return (
      <Layout
          description={`${siteConfig.tagline}`}>
        <Header />
        <main className="page">
          <Overview odd={false}/>
          <Contents odd={true}/>
          <Topic odd={false}/>
          <Usage odd={true}/>
          <Review odd={false}/>
          <Contact odd={true}/>
        </main>
      </Layout>
  );
}
