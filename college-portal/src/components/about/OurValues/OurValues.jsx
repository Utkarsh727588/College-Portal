import React from 'react';
import styles from './OurValues.module.css';
import { FaHeart, FaStar, FaUsers, FaLightbulb, FaHandshake, FaTrophy } from 'react-icons/fa';

const OurValues = () => {
  const values = [
    {
      icon: <FaHeart />,
      title: 'Passion',
      description: 'We are passionate about education and committed to making a difference'
    },
    {
      icon: <FaStar />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do'
    },
    {
      icon: <FaUsers />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnership'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'We embrace innovation and continuously improve our services'
    },
    {
      icon: <FaHandshake />,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical standards'
    },
    {
      icon: <FaTrophy />,
      title: 'Student Success',
      description: 'We measure our success by the success of our students'
    }
  ];

  return (
    <section className={styles.valuesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Core Values</h2>
        <p className={styles.subtitle}>The principles that guide everything we do</p>

        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div 
              key={index} 
              className={styles.valueCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.iconWrapper}>
                {value.icon}
              </div>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;