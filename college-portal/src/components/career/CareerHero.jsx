import React from 'react';
import styles from './CareerHero.module.css';

const CareerHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Join Our Team</h1>
          <p className={styles.subtitle}>
            Build your career with us and make a difference in education
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>View Openings</button>
            <button className={styles.secondaryBtn}>Learn More</button>
          </div>
        </div>
      </div>
      <div className={styles.decorativeShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
      </div>
    </section>
  );
};

export default CareerHero;