import React from 'react';
import styles from './ProgramsHero.module.css';

const ProgramsHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Our Programs</h1>
          <p className={styles.subtitle}>
            Discover world-class programs designed to transform your career and unlock your potential
          </p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <h3 className={styles.statNumber}>50+</h3>
              <p className={styles.statLabel}>Programs</p>
            </div>
            <div className={styles.statItem}>
              <h3 className={styles.statNumber}>10,000+</h3>
              <p className={styles.statLabel}>Students</p>
            </div>
            <div className={styles.statItem}>
              <h3 className={styles.statNumber}>95%</h3>
              <p className={styles.statLabel}>Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsHero;