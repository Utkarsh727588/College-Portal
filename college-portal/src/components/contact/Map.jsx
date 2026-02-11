import React from 'react';
import styles from './Map.module.css';

const Map = () => {
  return (
    <section className={styles.mapSection}>
      <div className={styles.mapWrapper}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.3721736758577!2d76.77416931508123!3d30.735113981635064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sSector%2034%2C%20Chandigarh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Nexity Consulting Location"
        ></iframe>
        <div className={styles.mapOverlay}>
          <div className={styles.locationCard}>
            <h3 className={styles.locationTitle}>Visit Our Office</h3>
            <p className={styles.locationAddress}>
              Nexity Consulting LLP<br />
              Miran Tower 2 Phase 8, Mohali<br />
              Punjab, India - 160071
            </p>
            <a 
              href="https://maps.app.goo.gl/GaZxNETK5CErhC6g6" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.directionsBtn}
            >
              Get Directions →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;