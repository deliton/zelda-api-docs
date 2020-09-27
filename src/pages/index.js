import React from 'react';
import clsx from 'clsx';
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
      title={`Welcome to ${siteConfig.title}`}
      description="An open source RESTful API containing data about The Legend of Zelda series">
      <main className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img className={clsx('logo', styles.apiLogo)} src='https://user-images.githubusercontent.com/47995046/94375902-3ddbdb80-00ed-11eb-9acf-aa6a114af01b.png'/>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
