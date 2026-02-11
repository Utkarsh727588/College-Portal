import React, { useState, useEffect } from 'react';
import styles from './RegisterModal.module.css';

const RegisterModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    phoneNumber: ''
  });
  const [countryCode, setCountryCode] = useState('IN +91');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  // const [otpSent, setOtpSent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGetOTP = () => {
    if (formData.phoneNumber.trim()) {
      setOtpSent(true);
      alert('OTP sent successfully to your phone number!');
    } else {
      alert('Please enter your phone number');
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`reg-otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace to move to previous input
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`reg-otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleSubmit = () => {
    const otpValue = otp.join('');
    
    if (!formData.email || !formData.fullName || !formData.phoneNumber) {
      alert('Please fill all required fields');
      return;
    }

    if (otpValue.length === 6) {
      alert('Registration successful!');
      onClose();
      // Reset form
      setFormData({ email: '', fullName: '', phoneNumber: '' });
      setOtp(['', '', '', '', '', '']);
      setOtpSent(false);
    } else {
      alert('Please enter complete OTP');
    }
  };

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>

        <h2 className={styles.title}>Registration</h2>
        <p className={styles.subtitle}>Please provide the information below to register</p>

        <div className={styles.formGroup}>
          <label className={styles.label}>Email Id *</label>
          <input
            type="email"
            name="email"
            className={styles.inputFull}
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Full Name *</label>
          <input
            type="text"
            name="fullName"
            className={styles.inputFull}
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter your full name"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Phone Number *</label>
          <div className={styles.phoneInputGroup}>
            <select 
              className={styles.countryCode}
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option value="IN +91">IN +91</option>
              <option value="US +1">US +1</option>
              <option value="UK +44">UK +44</option>
              <option value="AU +61">AU +61</option>
              <option value="CA +1">CA +1</option>
            </select>
            <input
              type="tel"
              name="phoneNumber"
              className={styles.phoneInput}
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Phone number"
            />
            <button 
              className={styles.otpButton}
              onClick={handleGetOTP}
            >
              Get OPT
            </button>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Enter OTP</label>
          <div className={styles.otpInputs}>
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`reg-otp-${index}`}
                type="text"
                maxLength="1"
                className={styles.otpBox}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              />
            ))}
          </div>
        </div>

        <button 
          className={styles.submitButton}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default RegisterModal;
