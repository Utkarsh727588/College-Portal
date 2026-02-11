// import React, { useState } from 'react';
// import styles from './SchoolsSection.module.css';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// // Import images
// import businessSchoolImg from '../../../assets/images/schools/business_management.jpeg';
// import engineeringSchoolImg from '../../../assets/images/schools/engineering_school.jpg';
// import artsSchoolImg from '../../../assets/images/schools/arts-school.jpg';
// import scienceSchoolImg from '../../../assets/images/schools/science-school.jpg';

// const SchoolsSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [direction, setDirection] = useState('next');
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const schools = [
//     {
//       title: 'School of Business and Management',
//       description: 'School of Business and Management offers UG, PG, M.Phil, and PhD programs in business.',
//       image: businessSchoolImg
//     },
//     {
//       title: 'School of Engineering and Technology',
//       description: 'School of Engineering and Technology offers cutting-edge programs in various engineering disciplines.',
//       image: engineeringSchoolImg
//     },
//     {
//       title: 'School of Liberal Arts',
//       description: 'School of Liberal Arts provides comprehensive programs in humanities and social sciences.',
//       image: artsSchoolImg
//     },
//     {
//       title: 'School of Sciences',
//       description: 'School of Sciences offers advanced programs in pure and applied sciences.',
//       image: scienceSchoolImg
//     }
//   ];

//   const nextSlide = () => {
//     if (!isTransitioning) {
//       setDirection('next');
//       setIsTransitioning(true);
//       setTimeout(() => {
//         setCurrentSlide((prev) => (prev + 1) % schools.length);
//         setIsTransitioning(false);
//       }, 100);
//     }
//   };

//   const prevSlide = () => {
//     if (!isTransitioning) {
//       setDirection('prev');
//       setIsTransitioning(true);
//       setTimeout(() => {
//         setCurrentSlide((prev) => (prev - 1 + schools.length) % schools.length);
//         setIsTransitioning(false);
//       }, 100);
//     }
//   };

//   const goToSlide = (index) => {
//     if (!isTransitioning && index !== currentSlide) {
//       setDirection(index > currentSlide ? 'next' : 'prev');
//       setIsTransitioning(true);
//       setTimeout(() => {
//         setCurrentSlide(index);
//         setIsTransitioning(false);
//       }, 100);
//     }
//   };

//   return (
//     <section className={styles.schoolsSection}>
//       <div className={styles.container}>
//         <div className={styles.carouselWrapper}>
//           {/* Left Arrow */}
//           <button 
//             className={`${styles.arrowBtn} ${styles.leftArrow}`} 
//             onClick={prevSlide}
//             disabled={isTransitioning}
//           >
//             <FaChevronLeft />
//           </button>

//           {/* School Card */}
//           <div className={`${styles.schoolCard} ${isTransitioning ? styles.transitioning : ''} ${styles[direction]}`}>
//             <div className={styles.schoolInfo}>
//               <h2 className={styles.schoolTitle}>{schools[currentSlide].title}</h2>
//               <p className={styles.schoolDescription}>{schools[currentSlide].description}</p>
//               <button className={styles.exploreBtn}>EXPLORE</button>
//             </div>
//             <div className={styles.schoolImage}>
//               <img 
//                 src={schools[currentSlide].image}
//                 alt={schools[currentSlide].title}
//               />
//             </div>
//           </div>

//           {/* Right Arrow */}
//           <button 
//             className={`${styles.arrowBtn} ${styles.rightArrow}`} 
//             onClick={nextSlide}
//             disabled={isTransitioning}
//           >
//             <FaChevronRight />
//           </button>
//         </div>

//         {/* Carousel Dots */}
//         <div className={styles.carouselDots}>
//           {schools.map((_, index) => (
//             <button
//               key={index}
//               className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`}
//               onClick={() => goToSlide(index)}
//               disabled={isTransitioning}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SchoolsSection;
import React, { useState } from 'react';
import styles from './SchoolsSection.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import images
import businessSchoolImg from '../../../assets/images/schools/business_management.jpeg';
import engineeringSchoolImg from '../../../assets/images/schools/engineering_school.jpg';
import artsSchoolImg from '../../../assets/images/schools/arts-school.jpg';
import scienceSchoolImg from '../../../assets/images/schools/science-school.jpg';

const SchoolsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const schools = [
    {
      title: 'School of Business and Management',
      description: 'School of Business and Management offers UG, PG, M.Phil, and PhD programs in business.',
      image: businessSchoolImg
    },
    {
      title: 'School of Engineering and Technology',
      description: 'School of Engineering and Technology offers cutting-edge programs in various engineering disciplines.',
      image: engineeringSchoolImg
    },
    {
      title: 'School of Liberal Arts',
      description: 'School of Liberal Arts provides comprehensive programs in humanities and social sciences.',
      image: artsSchoolImg
    },
    {
      title: 'School of Sciences',
      description: 'School of Sciences offers advanced programs in pure and applied sciences.',
      image: scienceSchoolImg
    }
  ];

  const nextSlide = () => {
    if (!isTransitioning) {
      setDirection('next');
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % schools.length);
        setIsTransitioning(false);
      }, 100);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setDirection('prev');
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev - 1 + schools.length) % schools.length);
        setIsTransitioning(false);
      }, 100);
    }
  };

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentSlide) {
      setDirection(index > currentSlide ? 'next' : 'prev');
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 100);
    }
  };

  return (
    <section className={styles.schoolsSection}>
      <div className={styles.container}>
        <div className={styles.carouselWrapper}>
          {/* Left Arrow */}
          <button 
            className={`${styles.arrowBtn} ${styles.leftArrow}`} 
            onClick={prevSlide}
            disabled={isTransitioning}
          >
            <FaChevronLeft />
          </button>

          {/* School Card with Background Image */}
          <div 
            className={`${styles.schoolCard} ${isTransitioning ? styles.transitioning : ''} ${styles[direction]}`}
            style={{ backgroundImage: `url(${schools[currentSlide].image})` }}
          >
            <div className={styles.overlay}></div>
            <div className={styles.schoolContent}>
              <div className={styles.schoolInfo}>
                <h2 className={styles.schoolTitle}>{schools[currentSlide].title}</h2>
                <p className={styles.schoolDescription}>{schools[currentSlide].description}</p>
                <button className={styles.exploreBtn}>EXPLORE</button>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            className={`${styles.arrowBtn} ${styles.rightArrow}`} 
            onClick={nextSlide}
            disabled={isTransitioning}
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Carousel Dots */}
        <div className={styles.carouselDots}>
          {schools.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolsSection;