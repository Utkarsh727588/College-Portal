import React from 'react';
import styles from './AboutHero.module.css';

const AboutHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>About Nexity Consulting</h1>
          <p className={styles.subtitle}>
            Empowering Education, Transforming Futures
          </p>
          <p className={styles.description}>
            We are dedicated to revolutionizing education through innovative consulting solutions, 
            helping institutions and students achieve excellence.
          </p>
        </div>
      </div>
      
      <div className={styles.wave}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default AboutHero;