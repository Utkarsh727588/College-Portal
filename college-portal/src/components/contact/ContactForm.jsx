import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>Send Us a Message</h2>
            <p className={styles.formSubtitle}>Fill out the form below and our team will get back to you within 24 hours</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  className={styles.input}
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  className={styles.input}
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  className={styles.input}
                  placeholder="+91 1234567890"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Subject *</label>
                <select
                  name="subject"
                  className={styles.input}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="admission">Admission Inquiry</option>
                  <option value="program">Program Information</option>
                  <option value="career">Career Opportunities</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Message *</label>
              <textarea
                name="message"
                className={styles.textarea}
                placeholder="Tell us more about your inquiry..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send Message
              <span className={styles.btnIcon}>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;