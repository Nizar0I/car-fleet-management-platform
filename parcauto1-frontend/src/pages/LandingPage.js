// src/pages/LandingPage.js
import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/NavbarL';
import Services from '../components/Services';
import Caracterestique from '../components/Caracterestique';
import Reclamation from '../components/Reclamation';



import Footer from '../components/Footer';

function LandingPage() {
  return (
    <>
       <Navbar/>
       <Hero />
       <Services />
       <Caracterestique />
       <Reclamation />  
      <Footer /> 
    </>
  );
}

export default LandingPage;
