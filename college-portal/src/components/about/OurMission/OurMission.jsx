import React from 'react';
import styles from './OurMission.module.css';
import { FaBullseye, FaEye } from 'react-icons/fa';

const OurMission = () => {
  return (
    <section className={styles.missionSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <FaBullseye />
            </div>
            <h3 className={styles.cardTitle}>Our Mission</h3>
            <p className={styles.cardText}>
              To empower students and educational institutions with innovative consulting 
              solutions that foster academic excellence, personal growth, and career success. 
              We strive to make quality education accessible and effective for everyone.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <FaEye />
            </div>
            <h3 className={styles.cardTitle}>Our Vision</h3>
            <p className={styles.cardText}>
              To be the leading educational consulting firm recognized for transforming 
              education through innovation, dedication, and excellence. We envision a future 
              where every student has the opportunity to reach their full potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;