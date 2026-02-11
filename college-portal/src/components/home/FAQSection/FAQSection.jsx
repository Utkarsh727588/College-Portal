import React, { useState } from 'react';
import styles from './FAQSection.module.css';
import FAQAccordion from './FAQAccordion';
import ApplyNowForm from '../ApplyNowForm/ApplyNowForm';

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState('general');

  const faqData = {
    general: [
      {
        question: 'What is Amity University Online?',
        answer: 'Amity University Online is India\'s first UGC-approved online university offering globally recognized online undergraduate, postgraduate, and certificate programs. Designed for working professionals and students, the platform provides the flexibility to advance education and careers without compromising existing commitments.'
      },
      {
        question: 'Is Amity University Online Accredited?',
        answer: 'Yes, Amity University Online is fully accredited and recognized by the University Grants Commission (UGC) and other relevant regulatory bodies.'
      },
      {
        question: 'What sets Amity University Online apart?',
        answer: 'Amity University Online stands out with its innovative learning platform, industry-relevant curriculum, expert faculty, and flexible learning options that cater to diverse student needs.'
      },
      {
        question: 'What support services are available for students?',
        answer: 'Students have access to 24/7 support services including academic counseling, technical support, career guidance, and a dedicated student success team.'
      },
      {
        question: 'How does online learning at Amity University Online work?',
        answer: 'Online learning at Amity combines live interactive sessions, recorded lectures, digital resources, assignments, and assessments through an advanced learning management system accessible anytime, anywhere.'
      },
      {
        question: 'Can credits from other institutions be transferred?',
        answer: 'Yes, Amity University Online accepts credit transfers from recognized institutions subject to evaluation and approval based on course equivalency.'
      },
      {
        question: 'How are exams conducted?',
        answer: 'Exams are conducted online through a secure proctored system that ensures academic integrity while providing flexibility to students.'
      }
    ],
    academics: [
      {
        question: 'What programs are offered?',
        answer: 'Amity University Online offers a wide range of undergraduate, postgraduate, and certificate programs across various disciplines including Business, Technology, Arts, and Sciences.'
      },
      {
        question: 'What is the duration of programs?',
        answer: 'Program duration varies: UG programs typically take 3-4 years, PG programs 2 years, and certificate programs 6-12 months.'
      },
      {
        question: 'Are the degrees equivalent to regular degrees?',
        answer: 'Yes, degrees from Amity University Online hold the same value and recognition as regular on-campus degrees.'
      }
    ],
    admission: [
      {
        question: 'What are the eligibility criteria?',
        answer: 'Eligibility criteria vary by program. Generally, UG programs require 10+2 qualification, while PG programs require a relevant bachelor\'s degree.'
      },
      {
        question: 'How do I apply?',
        answer: 'You can apply online through our website by filling out the application form, submitting required documents, and paying the application fee.'
      },
      {
        question: 'What documents are required?',
        answer: 'Required documents typically include academic transcripts, ID proof, photographs, and any relevant certificates or experience letters.'
      }
    ]
  };

  const tabs = [
    { id: 'general', label: 'General' },
    { id: 'academics', label: 'Academics' },
    { id: 'admission', label: 'Admission' }
  ];

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        
        <div className={styles.faqContent}>
          {/* FAQ Accordion - Left Side */}
          <div className={styles.faqLeft}>
            <div className={styles.tabs}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <FAQAccordion faqs={faqData[activeTab]} />
          </div>

          {/* Apply Now Form - Right Side */}
          <div className={styles.faqRight}>
            <ApplyNowForm />
          </div>
        </div>
      </div>

      {/* Show More Button */}
      <div className={styles.showMoreContainer}>
        <button className={styles.showMoreBtn}>Show More ↓</button>
      </div>
    </section>
  );
};

export default FAQSection;