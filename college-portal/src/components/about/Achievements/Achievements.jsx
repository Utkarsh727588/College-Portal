import React from 'react';
import styles from './Achievements.module.css';
import { FaTrophy, FaAward, FaCertificate, FaMedal } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      icon: <FaTrophy />,
      title: 'Best Educational Consultant 2023',
      description: 'Awarded by Education Excellence Forum'
    },
    {
      icon: <FaAward />,
      title: 'Innovation in Education',
      description: 'Recognized for implementing cutting-edge solutions'
    },
    {
      icon: <FaCertificate />,
      title: 'ISO 9001:2015 Certified',
      description: 'Quality management system certification'
    },
    {
      icon: <FaMedal />,
      title: '95% Student Satisfaction',
      description: 'Consistently high ratings from our students'
    }
  ];

  return (
    <section className={styles.achievementsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Achievements</h2>
        <p className={styles.subtitle}>
          Recognition of our commitment to excellence
        </p>

        <div className={styles.achievementsGrid}>
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className={styles.achievementCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.iconWrapper}>
                {achievement.icon}
              </div>
              <h3 className={styles.achievementTitle}>{achievement.title}</h3>
              <p className={styles.achievementDescription}>{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;