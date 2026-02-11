import React from 'react';
import styles from './OurStory.module.css';
import { FaBook, FaGraduationCap, FaLightbulb } from 'react-icons/fa';

const OurStory = () => {
  return (
    <section className={styles.storySection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Our Story</h2>
            <p className={styles.text}>
              Founded in 2010, Nexity Consulting began with a simple yet powerful vision: 
              to bridge the gap between traditional education and modern learning needs. 
              What started as a small team of passionate educators has grown into a leading 
              educational consulting firm.
            </p>
            <p className={styles.text}>
              Over the years, we've helped thousands of students achieve their academic goals 
              and assisted numerous institutions in implementing innovative teaching methodologies. 
              Our journey has been marked by continuous learning, adaptation, and an unwavering 
              commitment to excellence.
            </p>
            <p className={styles.text}>
              Today, we stand as a trusted partner for students, parents, and educational 
              institutions across the region, continuing to innovate and inspire.
            </p>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <FaGraduationCap />
              </div>
              <div className={styles.statNumber}>10,000+</div>
              <div className={styles.statLabel}>Students Guided</div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <FaBook />
              </div>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Partner Institutions</div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <FaLightbulb />
              </div>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;