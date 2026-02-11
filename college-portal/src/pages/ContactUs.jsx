import React from 'react';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import Map from '../components/contact/Map';

const ContactUs = () => {
  return (
    <div>
      <Header />
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <Map />
      <Footer />
    </div>
  );
};

export default ContactUs;
