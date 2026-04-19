// src/dashboard_components/Dashboard.js
import React, { useEffect, useState } from 'react';
import '../Dashboard.css';
import AdminLayout from '../AdminLayout';
import axios from 'axios';
import { FaCar, FaGasPump, FaIdBadge, FaTools, FaUserTie, FaExclamationTriangle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const [counts, setCounts] = useState({
    vehicule: 0,
    carburant: 0,
    vignette: 0,
    maintenance: 0,
    chauffeur: 0,
    reclamations: 0
  });

  // Appel API pour récupérer les totaux
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [v, c, vi, m, ch, r] = await Promise.all([
          axios.get('http://127.0.0.1:8000/api/vehicules'),
          axios.get('http://127.0.0.1:8000/api/carburants'),
          axios.get('http://127.0.0.1:8000/api/vignettes'),
          axios.get('http://127.0.0.1:8000/api/maintenances'),
          axios.get('http://127.0.0.1:8000/api/chauffeurs'),
          axios.get('http://127.0.0.1:8000/api/reclamations'),
        ]);                                                    
        setCounts({
          vehicule: v.data.length,
          carburant: c.data.length,
          vignette: vi.data.length,
          maintenance: m.data.length,
          chauffeur: ch.data.length,
          reclamations: r.data.length
        });
      } catch (error) {
        console.error("Erreur lors de la récupération des données", error);
      }
    };

    fetchCounts();
  }, []);

  const items = [
    { label: "Véhicules", icon: <FaCar />, color: "#007bff", link: "/vehicule", count: counts.vehicule },
    { label: "Carburant", icon: <FaGasPump />, color: "#28a745", link: "/carburant", count: counts.carburant },
    { label: "Vignettes", icon: <FaIdBadge />, color: "#ffc107", link: "/vignette", count: counts.vignette },
    { label: "Maintenance", icon: <FaTools />, color: "#17a2b8", link: "/maintenance", count: counts.maintenance },
    { label: "Chauffeurs", icon: <FaUserTie />, color: "#6f42c1", link: "/chauffeur", count: counts.chauffeur },
    { label: "Réclamations", icon: <FaExclamationTriangle />, color: "#dc3545", link: "/reclamations", count: counts.reclamations }
  ];

  return (
    <AdminLayout>
      <div className="dashboard">
        <h2 className="dashboard-title">📊 Tableau de Bord</h2>
        <div className="dashboard-grid">
          {items.map((item, index) => (
            <div
              key={index}
              className="dashboard-card"
              style={{ borderTop: `5px solid ${item.color}` }}
              onClick={() => navigate(item.link)}
            >
              <div className="dashboard-icon" style={{ color: item.color }}>
                {item.icon}
              </div>
              <h3>{item.label}</h3>
              <p className="dashboard-count">{item.count} enregistrements</p>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;

// // src/dashboard_components/Dashboard.js
// import React from 'react';
// import '../Dashboard.css'
// import AdminLayout from '../AdminLayout';
// import { FaCar, FaGasPump, FaIdBadge, FaTools, FaUserTie, FaExclamationTriangle } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// function Dashboard() {
//   const navigate = useNavigate();

//   const items = [
//     { label: "Véhicules", icon: <FaCar />, color: "#007bff", link: "/Vehicule" },
//     { label: "Carburant", icon: <FaGasPump />, color: "#28a745", link: "/carburant" },
//     { label: "Vignettes", icon: <FaIdBadge />, color: "#ffc107", link: "/vignette" },
//     { label: "Maintenance", icon: <FaTools />, color: "#17a2b8", link: "/maintenance" },
//     { label: "Chauffeurs", icon: <FaUserTie />, color: "#6f42c1", link: "/chauffeur" },
//     { label: "Réclamations", icon: <FaExclamationTriangle />, color: "#dc3545", link: "/reclamations" }
//   ];

//   return (
//     <AdminLayout>
//       <div className="dashboard">
//         <h2 className="dashboard-title">📊 Tableau de Bord</h2>
//         <div className="dashboard-grid">
//           {items.map((item, index) => (
//             <div
//               key={index}
//               className="dashboard-card"
//               style={{ borderTop: `5px solid ${item.color}` }}
//               onClick={() => navigate(item.link)}
//             >
//               <div className="dashboard-icon" style={{ color: item.color }}>
//                 {item.icon}
//               </div>
//               <h3>{item.label}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </AdminLayout>
//   );
// }

// export default Dashboard;