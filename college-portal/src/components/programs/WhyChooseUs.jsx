import React from 'react';
import styles from './WhyChooseUs.module.css';
import { FaCheckCircle, FaLaptop, FaCertificate, FaUsers } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaLaptop />,
      title: 'Flexible Learning',
      description: 'Study at your own pace with our advanced online learning platform'
    },
    {
      icon: <FaCertificate />,
      title: 'Accredited Programs',
      description: 'All programs are UGC approved and globally recognized'
    },
    {
      icon: <FaUsers />,
      title: 'Expert Faculty',
      description: 'Learn from industry professionals and experienced educators'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Career Support',
      description: '24/7 career counseling and placement assistance'
    }
  ];

  return (
    <section className={styles.whySection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why Choose Our Programs?</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={styles.featureCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.iconBox}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;