import React from 'react';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import CareerHero from '../components/career/CareerHero';
import JobOpenings from '../components/career/JobOpenings';
import WhyJoinUs from '../components/career/WhyJoinUs';

const Career = () => {
  return (
    <div>
      <Header />
      <CareerHero />
      <JobOpenings />
      <WhyJoinUs />
      <Footer />
    </div>
  );
};

export default Career;