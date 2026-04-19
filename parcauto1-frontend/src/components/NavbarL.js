import React from 'react';
import '../styles/NavbarL.css';
import { useNavigate } from 'react-router-dom';
import { FaUserShield, FaUserPlus } from 'react-icons/fa';
import logo from '../assets/drcalogo.png';

const NavbarL = () => {
  const navigate = useNavigate();

  const handleAdminClick = () => {
    navigate('/admin');
  };
  const handleChauffeurClick = () => {
    navigate('/ChauffeurInscriptionPage');
  };


  return(

  <nav className="navbar">
    <div className="logo">
        <img src={logo} alt="Logo DRCA" className="navbar-logo" />
        <span className="logo-text">PARCY</span>
      </div>
    {/* <div className="logo">🚗 DRCA Auto</div> */}
    <div className="nav-links">
      <a href="#Hero">Accueil</a>
      <a href="#services">Services</a>
      <a href="#caracterstiques">Caractéristiques</a>
      <a href="#reclamation">Réclamation</a>

      <button className="btn-admin" onClick={handleAdminClick}>
        <FaUserShield style={{ marginRight: '8px' }} />
         Espace Admin</button>

        <button className="btn-chauffeur" onClick={handleChauffeurClick}>
          <FaUserPlus style={{ marginRight: '8px' }} />
          Inscription Conseiller
        </button>

      
    </div>
  </nav>
  );
};

export default NavbarL;
