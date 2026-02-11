import React, { useState } from 'react';
import styles from './ProgramsList.module.css';
import { FaGraduationCap, FaBook, FaClock, FaCertificate } from 'react-icons/fa';

const ProgramsList = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Programs' },
    { id: 'ug', label: 'Undergraduate' },
    { id: 'pg', label: 'Postgraduate' },
    { id: 'certificate', label: 'Certificate' }
  ];

  const programs = [
    {
      id: 1,
      category: 'ug',
      title: 'Bachelor of Business Administration (BBA)',
      duration: '3 Years',
      type: 'Undergraduate',
      description: 'Comprehensive business education covering management, finance, marketing, and entrepreneurship.',
      icon: <FaGraduationCap />
    },
    {
      id: 2,
      category: 'ug',
      title: 'Bachelor of Computer Applications (BCA)',
      duration: '3 Years',
      type: 'Undergraduate',
      description: 'In-depth computer science program covering programming, databases, and software development.',
      icon: <FaGraduationCap />
    },
    {
      id: 3,
      category: 'ug',
      title: 'Bachelor of Arts (BA)',
      duration: '3 Years',
      type: 'Undergraduate',
      description: 'Liberal arts program with specializations in Psychology, English, Economics, and more.',
      icon: <FaGraduationCap />
    },
    {
      id: 4,
      category: 'pg',
      title: 'Master of Business Administration (MBA)',
      duration: '2 Years',
      type: 'Postgraduate',
      description: 'Advanced business degree with specializations in Finance, Marketing, HR, and Operations.',
      icon: <FaBook />
    },
    {
      id: 5,
      category: 'pg',
      title: 'Master of Computer Applications (MCA)',
      duration: '2 Years',
      type: 'Postgraduate',
      description: 'Advanced IT program focusing on software engineering, AI, and data science.',
      icon: <FaBook />
    },
    {
      id: 6,
      category: 'pg',
      title: 'Master of Arts (MA)',
      duration: '2 Years',
      type: 'Postgraduate',
      description: 'Specialized postgraduate programs in various humanities and social sciences.',
      icon: <FaBook />
    },
    {
      id: 7,
      category: 'certificate',
      title: 'Digital Marketing Certification',
      duration: '6 Months',
      type: 'Certificate',
      description: 'Comprehensive digital marketing skills including SEO, SEM, and social media marketing.',
      icon: <FaCertificate />
    },
    {
      id: 8,
      category: 'certificate',
      title: 'Data Analytics Certification',
      duration: '6 Months',
      type: 'Certificate',
      description: 'Learn data analysis, visualization, and business intelligence tools.',
      icon: <FaCertificate />
    },
    {
      id: 9,
      category: 'certificate',
      title: 'Project Management Certification',
      duration: '4 Months',
      type: 'Certificate',
      description: 'Professional project management methodologies and best practices.',
      icon: <FaCertificate />
    }
  ];

  const filteredPrograms = activeCategory === 'all' 
    ? programs 
    : programs.filter(program => program.category === activeCategory);

  return (
    <section className={styles.programsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Browse Our Programs</h2>
        
        {/* Category Filter */}
        <div className={styles.categories}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`${styles.categoryBtn} ${activeCategory === category.id ? styles.active : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className={styles.programsGrid}>
          {filteredPrograms.map((program, index) => (
            <div 
              key={program.id} 
              className={styles.programCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.iconWrapper}>
                {program.icon}
              </div>
              <div className={styles.programContent}>
                <span className={styles.programType}>{program.type}</span>
                <h3 className={styles.programTitle}>{program.title}</h3>
                <p className={styles.programDescription}>{program.description}</p>
                <div className={styles.programMeta}>
                  <span className={styles.duration}>
                    <FaClock /> {program.duration}
                  </span>
                </div>
                <button className={styles.applyBtn}>Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsList;