import React, { useState } from 'react';
import styles from './FAQSection.module.css';

const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className={styles.accordion}>
      {faqs.map((faq, index) => (
        <div key={index} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openIndex === index ? styles.accordionHeaderActive : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <span className={styles.accordionQuestion}>{faq.question}</span>
            <span className={styles.accordionIcon}>
              {openIndex === index ? '∧' : '∨'}
            </span>
          </button>
          {openIndex === index && (
            <div className={styles.accordionContent}>
              <p className={styles.accordionAnswer}>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;