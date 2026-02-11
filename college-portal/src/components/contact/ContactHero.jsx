import React from 'react';
import styles from './ContactHero.module.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Get In Touch</h1>
          <p className={styles.subtitle}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          
          <div className={styles.quickContact}>
            <a href="tel:+911234567890" className={styles.contactItem}>
              <div className={styles.iconBox}>
                <FaPhone />
              </div>
              <div className={styles.contactText}>
                <span className={styles.label}>Call Us</span>
                <span className={styles.value}>+91 1234567890</span>
              </div>
            </a>
            
            <a href="mailto:info@nexity.com" className={styles.contactItem}>
              <div className={styles.iconBox}>
                <FaEnvelope />
              </div>
              <div className={styles.contactText}>
                <span className={styles.label}>Email Us</span>
                <span className={styles.value}>info@nexity.com</span>
              </div>
            </a>
            
            <div className={styles.contactItem}>
              <div className={styles.iconBox}>
                <FaMapMarkerAlt />
              </div>
              <div className={styles.contactText}>
                <span className={styles.label}>Visit Us</span>
                <span className={styles.value}>Mohali,Punjab,India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.wave}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default ContactHero;