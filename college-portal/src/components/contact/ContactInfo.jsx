import React from 'react';
import styles from './ContactInfo.module.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: ['+91 1234567890', '+91 0987654321'],
      link: 'tel:+911234567890'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: ['info@nexity.com', 'support@nexity.com'],
      link: 'mailto:info@nexity.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      details: ['Nexity Consulting LLP', 'Miran Tower 2 Phase 8, Mohali', 'Punjab, India - 160071'],
      link: null
    },
    {
      icon: <FaClock />,
      title: 'Working Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: Closed', 'Sunday: Closed'],
      link: null
    }
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' }
  ];

  const renderSocialLinks = () => {
    return socialLinks.map((social, index) => {
      return React.createElement(
        'a',
        {
          key: index,
          href: social.url,
          target: '_blank',
          rel: 'noopener noreferrer',
          className: styles.socialLink,
          'aria-label': social.label
        },
        social.icon
      );
    });
  };

  return (
    <section className={styles.infoSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Contact Information</h2>
        
        <div className={styles.infoGrid}>
          {contactDetails.map((item, index) => (
            <div 
              key={index} 
              className={styles.infoCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <h3 className={styles.infoTitle}>{item.title}</h3>
              <div className={styles.infoDetails}>
                {item.details.map((detail, idx) => {
                  if (item.link && idx === 0) {
                    return (
                      <a key={idx} href={item.link} className={styles.infoLink}>
                        {detail}
                      </a>
                    );
                  } else {
                    return (
                      <p key={idx} className={styles.infoText}>{detail}</p>
                    );
                  }
                })}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.socialSection}>
          <h3 className={styles.socialTitle}>Follow Us</h3>
          <div className={styles.socialLinks}>
            {renderSocialLinks()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;