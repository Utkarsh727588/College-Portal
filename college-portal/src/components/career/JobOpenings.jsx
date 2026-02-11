import React, { useState } from 'react';
import styles from './JobOpenings.module.css';
import { FaMapMarkerAlt, FaClock, FaBriefcase } from 'react-icons/fa';

const JobOpenings = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Positions' },
    { id: 'teaching', label: 'Teaching' },
    { id: 'administration', label: 'Administration' },
    { id: 'technology', label: 'Technology' }
  ];

  const jobs = [
    {
      id: 1,
      category: 'teaching',
      title: 'Assistant Professor - Computer Science',
      location: 'Remote',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'We are looking for an experienced computer science professor to teach undergraduate and postgraduate students.',
      requirements: ['PhD in Computer Science', 'Strong research background', 'Excellent communication skills']
    },
    {
      id: 2,
      category: 'teaching',
      title: 'Associate Professor - Business Management',
      location: 'Hybrid',
      type: 'Full-time',
      experience: '5-8 years',
      description: 'Seeking an experienced business management professor with industry expertise.',
      requirements: ['PhD in Business/MBA', 'Industry experience', 'Published research']
    },
    {
      id: 3,
      category: 'administration',
      title: 'Academic Counselor',
      location: 'On-site',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Guide and support students throughout their academic journey.',
      requirements: ['Masters degree', 'Counseling experience', 'Excellent interpersonal skills']
    },
    {
      id: 4,
      category: 'administration',
      title: 'Admissions Manager',
      location: 'On-site',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Manage the entire admissions process and student recruitment.',
      requirements: ['Experience in education sector', 'Strong leadership', 'Data-driven approach']
    },
    {
      id: 5,
      category: 'technology',
      title: 'Learning Management System Developer',
      location: 'Remote',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Develop and maintain our online learning platform.',
      requirements: ['Full-stack development', 'Experience with LMS', 'Agile methodology']
    },
    {
      id: 6,
      category: 'technology',
      title: 'UI/UX Designer',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Design intuitive and engaging user experiences for our educational platforms.',
      requirements: ['Design portfolio', 'Figma/Adobe XD', 'User research experience']
    }
  ];

  const filteredJobs = activeFilter === 'all' 
    ? jobs 
    : jobs.filter(job => job.category === activeFilter);

  return (
    <section className={styles.jobsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Current Openings</h2>
        <p className={styles.sectionSubtitle}>Join our team and help shape the future of education</p>

        {/* Filters */}
        <div className={styles.filters}>
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`${styles.filterBtn} ${activeFilter === filter.id ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Job Listings */}
        <div className={styles.jobsList}>
          {filteredJobs.map((job, index) => (
            <div 
              key={job.id} 
              className={styles.jobCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.jobHeader}>
                <h3 className={styles.jobTitle}>{job.title}</h3>
                <span className={styles.jobType}>{job.type}</span>
              </div>
              
              <div className={styles.jobMeta}>
                <span className={styles.metaItem}>
                  <FaMapMarkerAlt /> {job.location}
                </span>
                <span className={styles.metaItem}>
                  <FaBriefcase /> {job.experience}
                </span>
              </div>

              <p className={styles.jobDescription}>{job.description}</p>

              <div className={styles.requirements}>
                <h4 className={styles.requirementsTitle}>Requirements:</h4>
                <ul className={styles.requirementsList}>
                  {job.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>

              <button className={styles.applyBtn}>Apply Now</button>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className={styles.noJobs}>
            <p>No positions available in this category at the moment.</p>
            <p>Check back soon or browse other categories!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobOpenings;