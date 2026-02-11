import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import LoginModal from '../LoginModal/LoginModal';
import RegisterModal from '../RegisterModal/RegisterModal';
import styles from './Header.module.css';
import { FaPhone, FaEnvelope, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logo from '../../../assets/styles/logo.svg'; // Import your logo

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleSwitchToRegister = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  return (
    <>
      <header className={styles.header}>
        {/* Top Bar */}
        <div className={styles.topBar}>
          <div className={styles.container}>
            <div className={styles.topBarContent}>
              <div className={styles.contactInfo}>
                <a href="tel:+911234567890" className={styles.contactItem}>
                  <FaPhone /> +91 1234567890
                </a>
                <a href="mailto:abc@gmail.com" className={styles.contactItem}>
                  <FaEnvelope /> ABC@GMAIL.COM
                </a>
              </div>
              <div className={styles.socialLinks}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className={styles.mainHeader}>
          <div className={styles.container}>
            <div className={styles.mainHeaderContent}>
              <Link to="/" className={styles.logo}>
                <img src={logo} alt="Nexity Consulting" className={styles.logoImage} />
              </Link>

              <Navigation />

              <div className={styles.headerActions}>
                <button 
                  onClick={() => setIsLoginModalOpen(true)} 
                  className={styles.loginBtn}
                >
                  <span className={styles.userIcon}>🔒</span> Login
                </button>
                <button 
                  onClick={() => setIsRegisterModalOpen(true)}
                  className={styles.registerBtn}
                >
                  Register
                </button>
                <Link to="/application" className={styles.applicationBtn}>
                  Application
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons Bar */}
        <div className={styles.actionBar}>
          <div className={styles.container}>
            <div className={styles.actionButtons}>
              <button className={styles.payFeesBtn}>PAY FEES</button>
              <button className={styles.takeTestBtn}>TAKE TEST</button>
            </div>
          </div>
        </div>
      </header>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)}
        onSwitchToRegister={handleSwitchToRegister}
      />

      {/* Register Modal */}
      <RegisterModal 
        isOpen={isRegisterModalOpen} 
        onClose={() => setIsRegisterModalOpen(false)}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </>
  );
};

export default Header;