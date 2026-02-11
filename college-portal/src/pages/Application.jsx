import React, { useState } from 'react';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import styles from './Application.module.css';

const Application = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Course Details
    courseApplied: '',
    preferredCollege: '',
    preferredBranch: '',
    year: 'Automatic',
    
    // Personal Details
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    gender: '',
    category: '',
    
    // Address - Communication
    commAddressLine1: '',
    commAddressLine2: '',
    commState: '',
    commCity: '',
    commPincode: '',
    
    // Address - Permanent
    sameAsComm: false,
    permAddressLine1: '',
    permAddressLine2: '',
    permState: '',
    permCity: '',
    permPincode: '',
    
    // Family Details
    fatherName: '',
    fatherOccupation: '',
    fatherPhone: '',
    fatherEmail: '',
    motherName: '',
    motherOccupation: '',
    motherPhone: '',
    motherEmail: '',
    guardianName: '',
    guardianRelation: '',
    guardianPhone: '',
    annualIncome: '',
    
    // Education Details
    tenthSchool: '',
    tenthBoard: '',
    tenthPercentage: '',
    tenthYearOfPassing: '',
    twelfthSchool: '',
    twelfthBoard: '',
    twelfthPercentage: '',
    twelfthYearOfPassing: '',
    previousCollege: '',
    previousCourse: '',
    previousPercentage: '',
    previousYearOfPassing: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && name === 'sameAsComm') {
      setFormData(prev => ({
        ...prev,
        sameAsComm: checked,
        permAddressLine1: checked ? prev.commAddressLine1 : prev.permAddressLine1,
        permAddressLine2: checked ? prev.commAddressLine2 : prev.permAddressLine2,
        permState: checked ? prev.commState : prev.permState,
        permCity: checked ? prev.commCity : prev.permCity,
        permPincode: checked ? prev.commPincode : prev.permPincode,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
  };

  const steps = [
    { number: 1, label: 'Personal', icon: 'user' },
    { number: 2, label: 'Family', icon: 'users' },
    { number: 3, label: 'Education', icon: 'graduation' },
    { number: 4, label: 'Review', icon: 'eye' },
  ];

  return (
    <div>
      <Header />
      <div className={styles.applicationContainer}>
        <div className={styles.applicationWrapper}>
          <h1 className={styles.pageTitle}>Application Form</h1>
          
          {/* Progress Steps */}
          <div className={styles.progressSteps}>
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className={`${styles.step} ${currentStep >= step.number ? styles.stepActive : ''}`}>
                  <div className={styles.stepIcon}>
                    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      {step.icon === 'user' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      )}
                      {step.icon === 'users' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      )}
                      {step.icon === 'graduation' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      )}
                      {step.icon === 'eye' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      )}
                    </svg>
                  </div>
                  <div className={styles.stepLabel}>{step.label}</div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`${styles.stepLine} ${currentStep > step.number ? styles.stepLineActive : ''}`}></div>
                )}
              </React.Fragment>
            ))}
          </div>

          <form onSubmit={handleSubmit} className={styles.applicationForm}>
            {/* Step 1: Course & Personal Details & Address */}
            {currentStep === 1 && (
              <div className={styles.formContent}>
                {/* Course Details Section */}
                <div className={styles.formSection}>
                  <div className={styles.sectionHeader}>
                    <div className={styles.sectionIconWrapper}>
                      <svg className={styles.sectionIcon} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className={styles.sectionTitle}>Course Details</h2>
                      <p className={styles.sectionSubtitle}>Fill in the information below</p>
                    </div>
                  </div>

                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Course Applied</label>
                      <select
                        name="courseApplied"
                        value={formData.courseApplied}
                        onChange={handleInputChange}
                        className={styles.formControl}
                      >
                        <option value="">Select a Course</option>
                        <option value="computer-science">Computer Science</option>
                        <option value="engineering">Engineering</option>
                        <option value="business">Business Administration</option>
                        <option value="medicine">Medicine</option>
                        <option value="law">Law</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Preferred College</label>
                      <select
                        name="preferredCollege"
                        value={formData.preferredCollege}
                        onChange={handleInputChange}
                        className={styles.formControl}
                      >
                        <option value="">Select your Preferred College</option>
                        <option value="college1">College of Engineering</option>
                        <option value="college2">College of Science</option>
                        <option value="college3">College of Arts</option>
                        <option value="college4">College of Business</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Preferred Branch</label>
                      <select
                        name="preferredBranch"
                        value={formData.preferredBranch}
                        onChange={handleInputChange}
                        className={styles.formControl}
                      >
                        <option value="">Select</option>
                        <option value="north">North Branch</option>
                        <option value="south">South Branch</option>
                        <option value="east">East Branch</option>
                        <option value="west">West Branch</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Year</label>
                      <input
                        type="text"
                        name="year"
                        value={formData.year}
                        onChange={handleInputChange}
                        className={styles.formControl}
                        readOnly
                      />
                    </div>
                  </div>
                </div>

                {/* Personal Details Section */}
                <div className={styles.formSection}>
                  <div className={styles.sectionHeader}>
                    <div className={styles.sectionIconWrapper}>
                      <svg className={styles.sectionIcon} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className={styles.sectionTitle}>Personal Details</h2>
                      <p className={styles.sectionSubtitle}>Fill in the information below</p>
                    </div>
                  </div>

                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className={styles.formControl}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Phone Number</label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className={styles.formControl}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Date of Birth</label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        placeholder="dd/mm/yyyy"
                        className={styles.formControl}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Gender</label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className={styles.formControl}
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                    </div>

                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                      <label className={styles.label}>Category</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className={styles.formControl}
                      >
                        <option value="">Select Category</option>
                        <option value="general">General</option>
                        <option value="obc">OBC</option>
                        <option value="sc">SC</option>
                        <option value="st">ST</option>
                        <option value="ews">EWS</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Address Section */}
                <div className={styles.formSection}>
                  <div className={styles.sectionHeader}>
                    <div className={styles.sectionIconWrapper}>
                      <svg className={styles.sectionIcon} viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h2 className={styles.sectionTitle}>Address</h2>
                      <p className={styles.sectionSubtitle}>Fill in the information below</p>
                    </div>
                  </div>

                  {/* Communication Address */}
                  <h3 className={styles.addressSubheading}>Communication Address</h3>
                  
                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Address Line 1</label>
                      <input
                        type="text"
                        name="commAddressLine1"
                        value={formData.commAddressLine1}
                        onChange={handleInputChange}
                        placeholder="Enter first name"
                        className={styles.formControl}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Address Line 2</label>
                      <input
                        type="text"
                        name="commAddressLine2"
                        value={formData.commAddressLine2}
                        onChange={handleInputChange}
                        placeholder="Enter first name"
                        className={styles.formControl}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>State</label>
                      <select
                        name="commState"
                        value={formData.commState}
                        onChange={handleInputChange}
                        className={styles.formControl}
                      >
                        <option value="">Enter State</option>
                        <option value="delhi">Delhi</option>
                        <option value="maharashtra">Maharashtra</option>
                        <option value="karnataka">Karnataka</option>
                        <option value="tamil-nadu">Tamil Nadu</option>
                        <option value="west-bengal">West Bengal</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>City</label>
                      <select
                        name="commCity"
                        value={formData.commCity}
                        onChange={handleInputChange}
                        className={styles.formControl}
                      >
                        <option value="">Enter City</option>
                        <option value="city1">City 1</option>
                        <option value="city2">City 2</option>
                        <option value="city3">City 3</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Pincode</label>
                      <input
                        type="text"
                        name="commPincode"
                        value={formData.commPincode}
                        onChange={handleInputChange}
                        placeholder="Enter City"
                        className={styles.formControl}
                        maxLength="6"
                      />
                    </div>
                  </div>

                  {/* Permanent Address */}
                  <h3 className={styles.addressSubheading}>Permanent Address</h3>
                  
                  <div className={styles.checkboxGroup}>
                    <input
                      type="checkbox"
                      id="sameAsComm"
                      name="sameAsComm"
                      checked={formData.sameAsComm}
                      onChange={handleInputChange}
                      className={styles.checkbox}
                    />
                    <label htmlFor="sameAsComm" className={styles.checkboxLabel}>
                      Same as Communication Address
                    </label>
                  </div>

                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Address Line 1</label>
                      <input
                        type="text"
                        name="permAddressLine1"
                        value={formData.permAddressLine1}
                        onChange={handleInputChange}
                        placeholder="Enter first name"
                        className={styles.formControl}
                        disabled={formData.sameAsComm}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Address Line 2</label>
                      <input
                        type="text"
                        name="permAddressLine2"
                        value={formData.permAddressLine2}
                        onChange={handleInputChange}
                        placeholder="Enter first name"
                        className={styles.formControl}
                        disabled={formData.sameAsComm}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>State</label>
                      <select
                        name="permState"
                        value={formData.permState}
                        onChange={handleInputChange}
                        className={styles.formControl}
                        disabled={formData.sameAsComm}
                      >
                        <option value="">Enter State</option>
                        <option value="delhi">Delhi</option>
                        <option value="maharashtra">Maharashtra</option>
                        <option value="karnataka">Karnataka</option>
                        <option value="tamil-nadu">Tamil Nadu</option>
                        <option value="west-bengal">West Bengal</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>City</label>
                      <select
                        name="permCity"
                        value={formData.permCity}
                        onChange={handleInputChange}
                        className={styles.formControl}
                        disabled={formData.sameAsComm}
                      >
                        <option value="">Enter City</option>
                        <option value="city1">City 1</option>
                        <option value="city2">City 2</option>
                        <option value="city3">City 3</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Pincode</label>
                      <input
                        type="text"
                        name="permPincode"
                        value={formData.permPincode}
                        onChange={handleInputChange}
                        placeholder="Enter City"
                        className={styles.formControl}
                        maxLength="6"
                        disabled={formData.sameAsComm}
                      />
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className={styles.navigationButtons}>
                  <button
                    type="button"
                    onClick={handleNext}
                    className={styles.btnNext}
                  >
                    Next
                    <svg className={styles.btnIcon} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Family Details */}
            {currentStep === 2 && (
              <div className={styles.formContent}>
                {/* Father's Details */}
                <div className={styles.formSection}>
                  <div className={styles.sectionHeader}>
                    <div className={styles.sectionIconWrapper}>
                      <svg className={styles.sectionIcon} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className={styles.sectionTitle}>Father's Details</h2>
                      <p className={styles.sectionSubtitle}>Fill in your father's information</p>
                    </div>
                  </div>

                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Father's Name</label>
                      <input
                        type="text"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleInputChange}
                        placeholder="Enter father's full name"
                        className={styles.formControl}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Occupation</label>
                      <input
                        type="text"
                        name="fatherOccupation"
                        value={formData.fatherOccupation}
                        onChange={handleInputChange}
                        placeholder="Enter occupation"
                        className={styles.formControl}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Phone Number</label>
                      <input
                        type="tel"
                        name="fatherPhone"
                        value={formData.fatherPhone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className={styles.formControl}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Email Address</label>
                      <input
                        type="email"
                        name="fatherEmail"
                        value={formData.fatherEmail}
                        onChange={handleInputChange}
                        placeholder="father@example.com"
                        className={styles.formControl}
                      />
                    </div>
                  </div>
                </div>

                {/* Mother's Details */}
                <div className={styles.formSection}>
                  <div className={styles.sectionHeader}>
                    <div className={styles.sectionIconWrapper}>
                      <svg className={styles.sectionIcon} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className={styles.sectionTitle}>Mother's Details</h2>
                      <p className={styles.sectionSubtitle}>Fill in your mother's information</p>
                    </div>
                  </div>

                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Mother's Name</label>
                      <input
                        type="text"
                        name="motherName"
                        value={formData.motherName}
                        onChange={handleInputChange}
                        placeholder="Enter mother's full name"
                        className={styles.formControl}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Occupation</label>
                      <input
                        type="text"
                        name="motherOccupation"
                        value={formData.motherOccupation}
                        onChange={handleInputChange}
                        placeholder="Enter occupation"
                        className={styles.formControl}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Phone Number</label>
                      <input
                        type="tel"
                        name="motherPhone"
                        value={formData.motherPhone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className={styles.formControl}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Email Address</label>
                      <input
                        type="email"
                        name="motherEmail"
                        value={formData.motherEmail}
                        onChange={handleInputChange}
                        placeholder="mother@example.com"
                        className={styles.formControl}
                      />
                    </div>
                  </div>
                </div>

                {/* Guardian Details */}
                <div className={styles.formSection}>
                  <div className={styles.sectionHeader}>
                    <div className={styles.sectionIconWrapper}>
                      <svg className={styles.sectionIcon} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className={styles.sectionTitle}>Guardian Details (If Applicable)</h2>
                      <p className={styles.sectionSubtitle}>Optional - Fill if different from parents</p>
                    </div>
                  </div>

                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Guardian's Name</label>
                      <input
                        type="text"
                        name="guardianName"
                        value={formData.guardianName}
                        onChange={handleInputChange}
                        placeholder="Enter guardian's full name"
                        className={styles.formControl}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Relation</label>
                      <select
                        name="guardianRelation"
                        value={formData.guardianRelation}
                        onChange={handleInputChange}
                        className={styles.formControl}
                      >
                        <option value="">Select relation</option>
                        <option value="uncle">Uncle</option>
                        <option value="aunt">Aunt</option>
                        <option value="grandfather">Grandfather</option>
                        <option value="grandmother">Grandmother</option>
                        <option value="brother">Brother</option>
                        <option value="sister">Sister</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Phone Number</label>
                      <input
                        type="tel"
                        name="guardianPhone"
                        value={formData.guardianPhone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className={styles.formControl}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Annual Family Income</label>
                      <select
                        name="annualIncome"
                        value={formData.annualIncome}
                        onChange={handleInputChange}
                        className={styles.formControl}
                      >
                        <option value="">Select income range</option>
                        <option value="below-1lakh">Below ₹1 Lakh</option>
                        <option value="1-3lakh">₹1 - ₹3 Lakh</option>
                        <option value="3-5lakh">₹3 - ₹5 Lakh</option>
                        <option value="5-10lakh">₹5 - ₹10 Lakh</option>
                        <option value="above-10lakh">Above ₹10 Lakh</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className={styles.navigationButtons}>
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className={styles.btnPrevious}
                  >
                    <svg className={styles.btnIcon} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className={styles.btnNext}
                  >
                    Next
                    <svg className={styles.btnIcon} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Education Details */}
            {currentStep === 3 && (
              <div className={styles.formContent}>
                {/* 10th Standard Details */}
                <div className={styles.formSection}>
                  <div className={styles.sectionHeader}>
                    <div className={styles.sectionIconWrapper}>
                      <svg className={styles.sectionIcon} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className={styles.sectionTitle}>10th Standard Details</h2>
                      <p className={styles.sectionSubtitle}>Secondary Education Information</p>
                    </div>
                  </div>

                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>School Name</label>
                      <input
                        type="text"
                        name="tenthSchool"
                        value={formData.tenthSchool}
                        onChange={handleInputChange}
                        placeholder="Enter school name"
                        className={styles.formControl}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Board</label>
                      <select
                        name="tenthBoard"
                        value={formData.tenthBoard}
                        onChange={handleInputChange}
                        className={styles.formControl}
                      >
                        <option value="">Select board</option>
                        <option value="cbse">CBSE</option>
                        <option value="icse">ICSE</option>
                        <option value="state">State Board</option>
                        <option value="igcse">IGCSE</option>
                        <option value="ib">IB</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Percentage / CGPA</label>
                      <input
                        type="text"
                        name="tenthPercentage"
                        value={formData.tenthPercentage}
                        onChange={handleInputChange}
                        placeholder="Enter percentage or CGPA"
                        className={styles.formControl}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Year of Passing</label>
                      <select
                        name="tenthYearOfPassing"
                        value={formData.tenthYearOfPassing}
                        onChange={handleInputChange}
                        className={styles.formControl}
                      >
                        <option value="">Select year</option>
                        {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* 12th Standard Details */}
                <div className={styles.formSection}>
                  <div className={styles.sectionHeader}>
                    <div className={styles.sectionIconWrapper}>
                      <svg className={styles.sectionIcon} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className={styles.sectionTitle}>12th Standard Details</h2>
                      <p className={styles.sectionSubtitle}>Higher Secondary Education Information</p>
                    </div>
                  </div>

                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>School Name</label>
                      <input
                        type="text"
                        name="twelfthSchool"
                        value={formData.twelfthSchool}
                        onChange={handleInputChange}
                        placeholder="Enter school name"
                        className={styles.formControl}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Board</label>
                      <select
                        name="twelfthBoard"
                        value={formData.twelfthBoard}
                        onChange={handleInputChange}
                        className={styles.formControl}
                      >
                        <option value="">Select board</option>
                        <option value="cbse">CBSE</option>
                        <option value="icse">ICSE</option>
                        <option value="state">State Board</option>
                        <option value="igcse">IGCSE</option>
                        <option value="ib">IB</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Percentage / CGPA</label>
                      <input
                        type="text"
                        name="twelfthPercentage"
                        value={formData.twelfthPercentage}
                        onChange={handleInputChange}
                        placeholder="Enter percentage or CGPA"
                        className={styles.formControl}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Year of Passing</label>
                      <select
                        name="twelfthYearOfPassing"
                        value={formData.twelfthYearOfPassing}
                        onChange={handleInputChange}
                        className={styles.formControl}
                      >
                        <option value="">Select year</option>
                        {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Previous College/University (If Applicable) */}
                <div className={styles.formSection}>
                  <div className={styles.sectionHeader}>
                    <div className={styles.sectionIconWrapper}>
                      <svg className={styles.sectionIcon} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className={styles.sectionTitle}>Previous College/University</h2>
                      <p className={styles.sectionSubtitle}>Optional - For transfer students</p>
                    </div>
                  </div>

                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>College/University Name</label>
                      <input
                        type="text"
                        name="previousCollege"
                        value={formData.previousCollege}
                        onChange={handleInputChange}
                        placeholder="Enter college/university name"
                        className={styles.formControl}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Course/Program</label>
                      <input
                        type="text"
                        name="previousCourse"
                        value={formData.previousCourse}
                        onChange={handleInputChange}
                        placeholder="Enter course name"
                        className={styles.formControl}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Percentage / CGPA</label>
                      <input
                        type="text"
                        name="previousPercentage"
                        value={formData.previousPercentage}
                        onChange={handleInputChange}
                        placeholder="Enter percentage or CGPA"
                        className={styles.formControl}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Year of Passing</label>
                      <select
                        name="previousYearOfPassing"
                        value={formData.previousYearOfPassing}
                        onChange={handleInputChange}
                        className={styles.formControl}
                      >
                        <option value="">Select year</option>
                        {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className={styles.navigationButtons}>
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className={styles.btnPrevious}
                  >
                    <svg className={styles.btnIcon} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className={styles.btnNext}
                  >
                    Next
                    <svg className={styles.btnIcon} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Review */}
            {currentStep === 4 && (
              <div className={styles.formContent}>
                <div className={styles.reviewIntro}>
                  <svg className={styles.reviewIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h2 className={styles.reviewTitle}>Review Your Application</h2>
                  <p className={styles.reviewSubtitle}>Please review all the information before submitting</p>
                </div>

                {/* Course & Personal Info Review */}
                <div className={styles.reviewSection}>
                  <div className={styles.reviewSectionHeader}>
                    <h3 className={styles.reviewSectionTitle}>Course & Personal Information</h3>
                    <button 
                      type="button" 
                      onClick={() => setCurrentStep(1)}
                      className={styles.editButton}
                    >
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                      Edit
                    </button>
                  </div>
                  <div className={styles.reviewGrid}>
                    <div className={styles.reviewItem}>
                      <span className={styles.reviewLabel}>Course Applied:</span>
                      <span className={styles.reviewValue}>{formData.courseApplied || 'Not provided'}</span>
                    </div>
                    <div className={styles.reviewItem}>
                      <span className={styles.reviewLabel}>Preferred College:</span>
                      <span className={styles.reviewValue}>{formData.preferredCollege || 'Not provided'}</span>
                    </div>
                    <div className={styles.reviewItem}>
                      <span className={styles.reviewLabel}>Preferred Branch:</span>
                      <span className={styles.reviewValue}>{formData.preferredBranch || 'Not provided'}</span>
                    </div>
                    <div className={styles.reviewItem}>
                      <span className={styles.reviewLabel}>Year:</span>
                      <span className={styles.reviewValue}>{formData.year}</span>
                    </div>
                    <div className={styles.reviewItem}>
                      <span className={styles.reviewLabel}>Email:</span>
                      <span className={styles.reviewValue}>{formData.email || 'Not provided'}</span>
                    </div>
                    <div className={styles.reviewItem}>
                      <span className={styles.reviewLabel}>Phone Number:</span>
                      <span className={styles.reviewValue}>{formData.phoneNumber || 'Not provided'}</span>
                    </div>
                    <div className={styles.reviewItem}>
                      <span className={styles.reviewLabel}>Date of Birth:</span>
                      <span className={styles.reviewValue}>{formData.dateOfBirth || 'Not provided'}</span>
                    </div>
                    <div className={styles.reviewItem}>
                      <span className={styles.reviewLabel}>Gender:</span>
                      <span className={styles.reviewValue}>{formData.gender || 'Not provided'}</span>
                    </div>
                    <div className={styles.reviewItem}>
                      <span className={styles.reviewLabel}>Category:</span>
                      <span className={styles.reviewValue}>{formData.category || 'Not provided'}</span>
                    </div>
                  </div>
                </div>

                {/* Address Review */}
                <div className={styles.reviewSection}>
                  <div className={styles.reviewSectionHeader}>
                    <h3 className={styles.reviewSectionTitle}>Address Information</h3>
                    <button 
                      type="button" 
                      onClick={() => setCurrentStep(1)}
                      className={styles.editButton}
                    >
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                      Edit
                    </button>
                  </div>
                  <div className={styles.reviewAddressSection}>
                    <div>
                      <h4 className={styles.reviewAddressTitle}>Communication Address</h4>
                      <div className={styles.reviewAddress}>
                        <p>{formData.commAddressLine1 || 'Not provided'}</p>
                        {formData.commAddressLine2 && <p>{formData.commAddressLine2}</p>}
                        <p>{formData.commCity}, {formData.commState} - {formData.commPincode}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className={styles.reviewAddressTitle}>Permanent Address</h4>
                      <div className={styles.reviewAddress}>
                        {formData.sameAsComm ? (
                          <p className={styles.sameAddress}>Same as Communication Address</p>
                        ) : (
                          <>
                            <p>{formData.permAddressLine1 || 'Not provided'}</p>
                            {formData.permAddressLine2 && <p>{formData.permAddressLine2}</p>}
                            <p>{formData.permCity}, {formData.permState} - {formData.permPincode}</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Family Details Review */}
                <div className={styles.reviewSection}>
                  <div className={styles.reviewSectionHeader}>
                    <h3 className={styles.reviewSectionTitle}>Family Information</h3>
                    <button 
                      type="button" 
                      onClick={() => setCurrentStep(2)}
                      className={styles.editButton}
                    >
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                      Edit
                    </button>
                  </div>
                  <div className={styles.reviewGrid}>
                    <div className={styles.reviewItem}>
                      <span className={styles.reviewLabel}>Father's Name:</span>
                      <span className={styles.reviewValue}>{formData.fatherName || 'Not provided'}</span>
                    </div>
                    <div className={styles.reviewItem}>
                      <span className={styles.reviewLabel}>Father's Occupation:</span>
                      <span className={styles.reviewValue}>{formData.fatherOccupation || 'Not provided'}</span>
                    </div>
                    <div className={styles.reviewItem}>
                      <span className={styles.reviewLabel}>Father's Phone:</span>
                      <span className={styles.reviewValue}>{formData.fatherPhone || 'Not provided'}</span>
                    </div>
                    <div className={styles.reviewItem}>
                      <span className={styles.reviewLabel}>Mother's Name:</span>
                      <span className={styles.reviewValue}>{formData.motherName || 'Not provided'}</span>
                    </div>
                    <div className={styles.reviewItem}>
                      <span className={styles.reviewLabel}>Mother's Occupation:</span>
                      <span className={styles.reviewValue}>{formData.motherOccupation || 'Not provided'}</span>
                    </div>
                    <div className={styles.reviewItem}>
                      <span className={styles.reviewLabel}>Mother's Phone:</span>
                      <span className={styles.reviewValue}>{formData.motherPhone || 'Not provided'}</span>
                    </div>
                    <div className={styles.reviewItem}>
                      <span className={styles.reviewLabel}>Annual Income:</span>
                      <span className={styles.reviewValue}>{formData.annualIncome || 'Not provided'}</span>
                    </div>
                  </div>
                </div>

                {/* Education Details Review */}
                <div className={styles.reviewSection}>
                  <div className={styles.reviewSectionHeader}>
                    <h3 className={styles.reviewSectionTitle}>Education Information</h3>
                    <button 
                      type="button" 
                      onClick={() => setCurrentStep(3)}
                      className={styles.editButton}
                    >
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                      Edit
                    </button>
                  </div>
                  <div className={styles.educationReview}>
                    <div className={styles.educationCard}>
                      <h4 className={styles.educationCardTitle}>10th Standard</h4>
                      <div className={styles.reviewGrid}>
                        <div className={styles.reviewItem}>
                          <span className={styles.reviewLabel}>School:</span>
                          <span className={styles.reviewValue}>{formData.tenthSchool || 'Not provided'}</span>
                        </div>
                        <div className={styles.reviewItem}>
                          <span className={styles.reviewLabel}>Board:</span>
                          <span className={styles.reviewValue}>{formData.tenthBoard || 'Not provided'}</span>
                        </div>
                        <div className={styles.reviewItem}>
                          <span className={styles.reviewLabel}>Percentage:</span>
                          <span className={styles.reviewValue}>{formData.tenthPercentage || 'Not provided'}</span>
                        </div>
                        <div className={styles.reviewItem}>
                          <span className={styles.reviewLabel}>Year:</span>
                          <span className={styles.reviewValue}>{formData.tenthYearOfPassing || 'Not provided'}</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.educationCard}>
                      <h4 className={styles.educationCardTitle}>12th Standard</h4>
                      <div className={styles.reviewGrid}>
                        <div className={styles.reviewItem}>
                          <span className={styles.reviewLabel}>School:</span>
                          <span className={styles.reviewValue}>{formData.twelfthSchool || 'Not provided'}</span>
                        </div>
                        <div className={styles.reviewItem}>
                          <span className={styles.reviewLabel}>Board:</span>
                          <span className={styles.reviewValue}>{formData.twelfthBoard || 'Not provided'}</span>
                        </div>
                        <div className={styles.reviewItem}>
                          <span className={styles.reviewLabel}>Percentage:</span>
                          <span className={styles.reviewValue}>{formData.twelfthPercentage || 'Not provided'}</span>
                        </div>
                        <div className={styles.reviewItem}>
                          <span className={styles.reviewLabel}>Year:</span>
                          <span className={styles.reviewValue}>{formData.twelfthYearOfPassing || 'Not provided'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Declaration */}
                <div className={styles.declaration}>
                  <div className={styles.declarationBox}>
                    <svg className={styles.declarationIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <p className={styles.declarationText}>
                      I hereby declare that all the information provided above is true and correct to the best of my knowledge. 
                      I understand that any false information may lead to the cancellation of my application.
                    </p>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className={styles.navigationButtons}>
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className={styles.btnPrevious}
                  >
                    <svg className={styles.btnIcon} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Previous
                  </button>
                  <button
                    type="submit"
                    className={styles.btnSubmit}
                  >
                    <svg className={styles.btnIcon} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Submit Application
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Application;