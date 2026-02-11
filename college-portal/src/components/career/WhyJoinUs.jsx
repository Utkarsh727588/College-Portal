import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './WhyJoinUs.module.css';
import { FaHeart, FaRocket, FaUsers, FaLightbulb, FaTrophy, FaBalanceScale } from 'react-icons/fa';

const WhyJoinUs = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <FaHeart />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs for you and your family'
    },
    {
      icon: <FaRocket />,
      title: 'Career Growth',
      description: 'Continuous learning opportunities and clear career advancement paths'
    },
    {
      icon: <FaUsers />,
      title: 'Collaborative Culture',
      description: 'Work with passionate educators and innovators in a supportive environment'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'Freedom to experiment and implement innovative teaching methodologies'
    },
    {
      icon: <FaTrophy />,
      title: 'Recognition',
      description: 'Regular recognition and rewards for outstanding performance'
    },
    {
      icon: <FaBalanceScale />,
      title: 'Work-Life Balance',
      description: 'Flexible working hours and remote work options'
    }
  ];

  const handleApplyClick = () => {
    navigate('/application');
  };

  return (
    <section className={styles.whySection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why Join Nexity Consulting?</h2>
        <p className={styles.subtitle}>We believe in empowering our team to achieve excellence</p>
        
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={styles.benefitCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.iconWrapper}>
                {benefit.icon}
              </div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <h3 className={styles.ctaTitle}>Ready to Make an Impact?</h3>
          <p className={styles.ctaText}>Join us in transforming education and shaping future leaders</p>
          <button className={styles.ctaButton} onClick={handleApplyClick}>
            Apply Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;