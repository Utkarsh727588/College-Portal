import React, { useState } from 'react';
import styles from './ApplyNowForm.module.css';

const ApplyNowForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    agreed: false
  });
  const [countryCode, setCountryCode] = useState('US +1');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert('Please agree to the terms and conditions');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Thank you! Our counsellor will contact you soon.');
    // Reset form
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      agreed: false
    });
  };

  return (
    <div className={styles.applyFormContainer}>
      <div className={styles.applyForm}>
        <h3 className={styles.formTitle}>Apply Now</h3>
        <p className={styles.formSubtext}>
          Please provide the information below, and our counsellor will get in touch with you.
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Full Name *</label>
            <input 
              type="text" 
              name="fullName"
              className={styles.input} 
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Phone Number *</label>
            <div className={styles.phoneInput}>
              <select 
                className={styles.countryCode}
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
              >
                <option value="US +1">US +1</option>
                <option value="IN +91">IN +91</option>
                <option value="UK +44">UK +44</option>
                <option value="AU +61">AU +61</option>
                <option value="CA +1">CA +1</option>
              </select>
              <input 
                type="tel" 
                name="phoneNumber"
                className={styles.phoneInputField} 
                placeholder="Phone number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Email Id *</label>
            <input 
              type="email" 
              name="email"
              className={styles.input} 
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.checkbox}>
              <input 
                type="checkbox" 
                name="agreed"
                checked={formData.agreed}
                onChange={handleInputChange}
                required 
              />
              <span className={styles.checkboxText}>
                By entering these details I agree that Online and its associates can contact me with updates & notifications via Email, SMS, WhatsApp, and Voice call as per the <span className={styles.privacyLink}>Privacy Policy</span>. This consent will override any registration for DNC / NDNC.
              </span>
            </label>
          </div>
          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyNowForm;
