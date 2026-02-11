import React from 'react';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import HeroSection from '../components/home/HeroSection/HeroSection';
import MonthlyHighlights from '../components/home/MonthlyHighlights/MonthlyHighlights';
import KeyAchievements from '../components/home/KeyAchievements/KeyAchievements';
import SchoolsSection from '../components/home/SchoolsSection/SchoolsSection';
import FAQSection from '../components/home/FAQSection/FAQSection';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <MonthlyHighlights />
      <KeyAchievements />
      <SchoolsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;