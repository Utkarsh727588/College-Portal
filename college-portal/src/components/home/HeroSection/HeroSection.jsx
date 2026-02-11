import React, { useState } from "react";
import styles from "./HeroSection.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import images
import graduatesImg from "../../../assets/images/hero-images/graduates.jpeg";
import missionImg from "../../../assets/images/hero-images/mission.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("next");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      title: "Who We Are",
      description: [
        "Asian University for Women (AUW) is the first of its kind—a fully independent, regional institution dedicated to women's education and leadership development.",
        "AUW exists to educate and empower women leaders through the transformative power of liberal arts and sciences education.",
      ],
      image: graduatesImg,
    },
    {
      title: "Our Mission",
      description: [
        "We are committed to providing access to higher education for talented women from underrepresented communities.",
        "Our goal is to develop leaders who will transform their communities and contribute to global progress.",
      ],
      image: missionImg,
    },
  ];

  const nextSlide = () => {
    if (!isTransitioning) {
      setDirection("next");
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 100);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setDirection("prev");
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsTransitioning(false);
      }, 100);
    }
  };

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentSlide) {
      setDirection(index > currentSlide ? "next" : "prev");
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 100);
    }
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.heroWrapper}>
          {/* Left Arrow */}
          <button
            className={`${styles.arrowBtn} ${styles.leftArrow}`}
            onClick={prevSlide}
            disabled={isTransitioning}
          >
            <FaChevronLeft />
          </button>

          <div
            className={`${styles.heroContent} ${isTransitioning ? styles.transitioning : ""} ${styles[direction]}`}
          >
            {/* Left Content */}
            <div className={styles.leftContent}>
              <div className={styles.slideContent}>
                <h2 className={styles.title}>{slides[currentSlide].title}</h2>
                {slides[currentSlide].description.map((para, index) => (
                  <p key={index} className={styles.description}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Dots Indicator */}
              <div className={styles.dotsContainer}>
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ""}`}
                    onClick={() => goToSlide(index)}
                    disabled={isTransitioning}
                  />
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className={styles.rightContent}>
              <div className={styles.imageContainer}>
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className={styles.heroImage}
                />
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
      </div>

      {/* Banner Section */}
      <div className={styles.bannerSection}>
        <div className={styles.bannerLeft}>
          <h1 className={styles.bannerYear}>2026 ACADEMIC YEAR</h1>
          <p className={styles.bannerSubtext}>Admission open now</p>
          <button className={styles.readMoreBtn}>READ MORE</button>
        </div>
        <div className={styles.bannerRight}>
          <h2 className={styles.bannerTitle}>
            MAKE YOUR
            <br />
            DREAMS COME TRUE
          </h2>
        </div>
        {/* <div className={styles.bannerNavigation}>
          <button className={styles.bannerNavBtn} onClick={prevSlide}>
            ‹
          </button>
          <button className={styles.bannerNavBtn} onClick={nextSlide}>
            ›
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
