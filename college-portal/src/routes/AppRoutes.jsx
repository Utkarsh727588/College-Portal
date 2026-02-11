import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Programs from '../pages/Programs';
import Career from '../pages/Career';
import ContactUs from '../pages/ContactUs';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Application from '../pages/Application';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/career" element={<Career />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/application" element={<Application />} />
    </Routes>
  );
};

export default AppRoutes;