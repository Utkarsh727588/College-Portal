import React from 'react';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import ProgramsHero from '../components/programs/ProgramsHero';
import ProgramsList from '../components/programs/ProgramsList';
import WhyChooseUs from '../components/programs/WhyChooseUs';

const Programs = () => {
  return (
    <div>
      <Header />
      <ProgramsHero />
      <ProgramsList />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Programs;
