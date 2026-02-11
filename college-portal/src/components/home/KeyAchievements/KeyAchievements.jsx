import React from 'react';
import styles from './KeyAchievements.module.css';

// Import image
import studentsLabImg from '../../../assets/images/achievements/student-lab-image.jpeg';

const KeyAchievements = () => {
  const achievements = [
    {
      title: '"There really isn\'t anything quite like it" — Oxford Vice-Chancellor on AUW',
      link: '#'
    },
    {
      title: 'Commencement Address by Oxford University Vice Chancellor Irene Tracey at AUW',
      link: '#'
    },
    {
      title: 'AUW Welcomes 1,968 Students Back to Campus',
      link: '#'
    },
    {
      title: 'AUW Teaching Fellowship: Now Accepting Applications',
      link: '#'
    },
    {
      title: 'AUW Welcomes Its Largest Cohort of RMG Students',
      link: '#'
    },
  ];

  return (
    <section className={styles.achievementsSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left - Image */}
          <div className={styles.imageContainer}>
            <img 
              src={studentsLabImg}
              alt="Students in Laboratory" 
              className={styles.achievementImage}
            />
          </div>

          {/* Right - Achievements List */}
          <div className={styles.achievementsList}>
            <h2 className={styles.title}>KEY ACHIEVEMENTS</h2>
            <div className={styles.achievementsItems}>
              {achievements.map((achievement, index) => (
                <div key={index} className={styles.achievementItem}>
                  <p className={styles.achievementTitle}>{achievement.title}</p>
                  <a href={achievement.link} className={styles.readMoreLink}>
                    READ MORE →
                  </a>
                </div>
              ))}
            </div>
            <button className={styles.moreNewsBtn}>MORE NEWS STORIES</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;