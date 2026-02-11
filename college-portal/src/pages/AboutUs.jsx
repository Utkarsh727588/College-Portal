import React from 'react';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import AboutHero from '../components/about/AboutHero/AboutHero';
import OurStory from '../components/about/OurStory/OurStory';
import OurMission from '../components/about/OurMission/OurMission';
import OurValues from '../components/about/OurValues/OurValues';
import OurTeam from '../components/about/OurTeam/OurTeam';
import Achievements from '../components/about/Achievements/Achievements';

const AboutUs = () => {
  return (
    <div>
      <Header />
      <AboutHero />
      <OurStory />
      <OurMission />
      <OurValues />
      <OurTeam />
      <Achievements />
      <Footer />
    </div>
  );
};

export default AboutUs;