import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { FaPhone, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Logo and Description */}
          <div className={styles.footerSection}>
            <Link to="/" className={styles.logo}>
              <img src="/logo192.png" alt="Nexity Consulting" />
              <span className={styles.logoText}>
                <span className={styles.nexity}>NEXITY</span>
                <span className={styles.consulting}>CONSULTING</span>
              </span>
            </Link>
            <p className={styles.description}>
              India's No.1 Online University offering UG, PG, and certification programs across various disciplines.
            </p>
          </div>

          {/* Toll Free Numbers */}
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Toll free numbers</h3>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <p className={styles.contactLabel}>For admission related queries</p>
                <a href="tel:12345667" className={styles.phoneNumber}>
                  <FaPhone /> 12345667
                </a>
              </div>
              <div className={styles.contactItem}>
                <p className={styles.contactLabel}>Student support team</p>
                <a href="tel:+911234565678" className={styles.phoneNumber}>
                  <FaPhone /> +91-12345678
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Newsletter</h3>
            <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.emailInput}
                required
              />
              <button type="submit" className={styles.subscribeBtn}>
                Subscribe
              </button>
            </form>
            <div className={styles.socialLinks}>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;