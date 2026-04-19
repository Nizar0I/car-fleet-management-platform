import React from 'react';
import { NavLink } from 'react-router-dom';

// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './AdminLayout.css';


function AdminLayout({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/admin');
  };
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-layout">
        <aside className="sidebar">
          <h2>Menu</h2>
          <nav>
            <NavLink to="/dashboard" activeclassname="active">Dashboard</NavLink>
            <NavLink to="/vehicule" activeclassname="active">🚗 Vehicule</NavLink>
            <NavLink to="/carburant" activeclassname="active">⛽Carburant</NavLink>
            <NavLink to="/vignette" activeclassname="active">🧾Vignette</NavLink>
            <NavLink to="/maintenance" activeclassname="active">🛠️Maintenance</NavLink>
            <NavLink to="/Chauffeur" activeclassname="active">👤Conseiller</NavLink>
            <NavLink to="/reclamations" activeclassname="active">📨 Réclamations</NavLink>
            

            {/* <Link to="/dashboard">Dashboard</Link>
            <Link to="/vehicule">🚗 Vehicule</Link>
            <Link to="/carburant">⛽ Carburant</Link>   
            <Link to="/vignette">🧾 Vignettes</Link>
            <Link to="/maintenance">🛠️ Maintenance</Link>
            <Link to="/Chauffeur">👤 Chauffeur</Link>
            <Link to="/reclamations">📨 Réclamations</Link> */}
            <button onClick={handleLogout} className="logout-btn">Déconnexion</button>           
          </nav>
        </aside>
        <main className="admin-main">
          {children}
        </main>
      </div>
    </div>
  );
}



export default AdminLayout;
