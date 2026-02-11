import React from 'react';
import styles from './MonthlyHighlights.module.css';

const MonthlyHighlights = () => {
  const highlights = [
    'Call for Research Assistant Position in ICSSR Funded Project',
    'Call for Research Assistant Position in ICSSR Funded Project',
    'Call for Research Assistant Position in ICSSR Funded Project',
    'Call for Research Assistant Position in ICSSR Funded Project',
    'Call for Field Investigator in ICSSR Funded Project',
  ];

  return (
    <section className={styles.monthlyHighlights}>
      <div className={styles.container}>
        <h2 className={styles.title}>Monthly Highlights</h2>
        <div className={styles.highlightsList}>
          {highlights.map((highlight, index) => (
            <div key={index} className={styles.highlightItem}>
              <div className={styles.highlightText}>{highlight}</div>
            </div>
          ))}
        </div>
        <div className={styles.viewAllContainer}>
          <button className={styles.viewAllBtn}>View All</button>
        </div>
      </div>
    </section>
  );
};

export default MonthlyHighlights;