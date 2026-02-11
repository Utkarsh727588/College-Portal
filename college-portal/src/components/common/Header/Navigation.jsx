import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Navigation = () => {
  const navLinks = [
    { path: '/about-us', label: 'About Us' },
    { path: '/programs', label: 'Programs' },
    { path: '/career', label: 'Career' },
    { path: '/contact-us', label: 'Contact Us' },
  ];

  return (
    <nav className={styles.navigation}>
      {navLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;