import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import Login from './Login';
// import Register from './Register';

// Landing page
import ChauffeurInscriptionPage from './pages/ChauffeurInscriptionPage';
import LandingPage from './pages/LandingPage';
import './styles/global.css';
//dashboard admin
import AdminLogin from './AdminLogin';
import Dashboard from './dashboard_components/Dashboard';
import Vehicule from './dashboard_components/Vehicule';
import Chauffeur from './dashboard_components/Chauffeur';
import Carburant from './dashboard_components/Carburant';
import Vignette from './dashboard_components/Vignette';
import Maintenance from './dashboard_components/Maintenance';
import Reclamations from './dashboard_components/Reclamations';


function App() {
  return (
    
    
    <Router>
      <Routes>
        
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/" element={<Register />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/vehicule" element={<Vehicule />} />
         <Route path="/carburant" element={<Carburant />} />      
        <Route path="/vignette" element={<Vignette />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/chauffeur" element={<Chauffeur />} />
        <Route path="/reclamations" element={<Reclamations />} />       
        <Route path="/ChauffeurInscriptionPage" element={<ChauffeurInscriptionPage />} />
        
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
      
    </Router>
    
  );
}

export default App;
