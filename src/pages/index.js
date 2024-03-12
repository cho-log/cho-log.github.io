import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from "../components/Header";
import Overview from "../components/Overview";
import Contents from "../components/Contents";
import Topic from "../components/Topic";
import Usage from "../components/Usage";
import Review from "../components/Review";
import Contact from "../components/Contact";

export default function Home() {
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
