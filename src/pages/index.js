import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
      <Layout
        title={siteConfig.title}
        description={siteConfig.tagline}>
        <div className={styles.container}>
           <div className={styles.inner}>
              <div className={styles.splash}>
                <img src="img/docs-splash.png" width="100%" alt="GNS3" />
              </div>
              <div>
                <div style={{ display: 'inline-block' }}>
                   <img src="img/logocolour.png" height="60px" alt="GNS3" />
                   <div className={styles.title}>
                      Documentation
                   </div>
                   <div className={styles.subtitle}>
                      {siteConfig.tagline}
                   </div>
                   <Link to={useBaseUrl('docs/')}>
                      <span className={styles.button}>
                         Get Started
                      </span>
                   </Link>
                </div>
              </div>
           </div>
        </div>
      </Layout>
  );
}

export default Home;
