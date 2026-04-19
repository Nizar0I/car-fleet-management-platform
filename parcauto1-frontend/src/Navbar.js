import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import logo from './assets/drcalogo.png';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/admin');
  };

  return (
    
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo DRCA" className="navbar-logo-img" />
        <span className="navbar-logo-text">PARCY Admin</span>
      </div>
      {/* <div className="navbar-logo">🚗 Parc Auto Admin</div> */}
      <div className="navbar-user">
        <span className="user-icon">👤</span>
        <button onClick={handleLogout} className="logout-btn">Déconnexion</button>
      </div>
    </nav>
  );
}

export default Navbar;
