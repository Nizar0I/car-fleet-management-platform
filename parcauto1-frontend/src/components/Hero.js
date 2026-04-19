import React from 'react';
import '../styles/Hero.css';
import { FaRoad } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/admin'); // redirige vers l'espace admin
  };

  return (
    <section id="Hero" className="hero-section">
      <div className="hero-overlay">
        <h1 className="hero-title">Bienvenue sur la Plateforme DRCA</h1>
        <p className="hero-subtitle">
          Optimisez la gestion de votre parc automobile avec simplicité et efficacité
        </p>
        <button className="hero-btn" onClick={handleExploreClick}>
          <FaRoad style={{ marginRight: '8px' }} />
          Explorer le système
        </button>
      </div>
    </section>
  );
}

export default Hero;
// import React from 'react';
// import '../styles/Hero.css'; // on garde le nom Hero.css pour le style
// import {FaRoad } from 'react-icons/fa';

// function Hero() {
//   return (
//     <section id="Hero" className="hero-section">
//       <div className="hero-overlay">
//         <h1 className="hero-title">Bienvenue sur la Plateforme DRCA</h1>
//         <p className="hero-subtitle">Optimisez la gestion de votre parc automobile avec simplicité et efficacité</p>
//         <button className="hero-btn">
//           <FaRoad style={{ marginRight: '8px' }} />
          
//           Explorer le système
//         </button>
        
//       </div>
//     </section>
//   );
// }

// export default Hero;
