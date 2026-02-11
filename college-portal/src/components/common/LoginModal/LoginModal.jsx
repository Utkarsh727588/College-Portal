import React, { useState, useEffect } from 'react';
import styles from './LoginModal.module.css';

const LoginModal = ({ isOpen, onClose }) => {
  const [userId, setUserId] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [otpSent, setOtpSent] = useState(false);

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

  const handleGetOTP = () => {
    if (userId.trim()) {
      setOtpSent(true);
      alert('OTP sent successfully!');
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace to move to previous input
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleSubmit = () => {
    const otpValue = otp.join('');
    if (otpValue.length === 6) {
      alert('Login successful!');
      onClose();
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

        <h2 className={styles.title}>Login</h2>
        <p className={styles.subtitle}>Please provide the information below to register</p>

        <div className={styles.formGroup}>
          <label className={styles.label}>User ID</label>
          <div className={styles.inputGroup}>
            <input
              type="text"
              className={styles.input}
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter your User ID"
            />
            <button 
              className={styles.otpButton}
              onClick={handleGetOTP}
            >
              Get OTP
            </button>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Enter OTP</label>
          <div className={styles.otpInputs}>
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
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

        <p className={styles.registerLink}>
          *Don't Have User ID?{' '}
          <a href="/register" className={styles.link}>
            Register Here.
          </a>
        </p>

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

export default LoginModal;