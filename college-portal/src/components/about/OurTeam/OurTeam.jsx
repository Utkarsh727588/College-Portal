import React from 'react';
import styles from './OurTeam.module.css';

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Founder & CEO',
      image: '/team/member1.jpg', // Replace with actual image
      bio: '20+ years of experience in education consulting'
    },
    {
      name: 'Priya Sharma',
      position: 'Director of Operations',
      image: '/team/member2.jpg',
      bio: 'Expert in institutional development and management'
    },
    {
      name: 'Amit Patel',
      position: 'Head of Student Services',
      image: '/team/member3.jpg',
      bio: 'Passionate about student success and career guidance'
    },
    {
      name: 'Neha Singh',
      position: 'Lead Education Consultant',
      image: '/team/member4.jpg',
      bio: 'Specialist in curriculum development and pedagogy'
    }
  ];

  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Meet Our Team</h2>
        <p className={styles.subtitle}>
          Dedicated professionals committed to your success
        </p>

        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={styles.memberCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.imageWrapper}>
                <div className={styles.imagePlaceholder}>
                  {member.name.charAt(0)}
                </div>
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberPosition}>{member.position}</p>
                <p className={styles.memberBio}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;