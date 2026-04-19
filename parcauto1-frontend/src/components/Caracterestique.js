// src/components/Caracteristiques.js
import React from 'react';
import '../styles/Caracterestique.css';
import { FaClock, FaShieldAlt, FaThumbsUp , FaMobileAlt,FaChartLine,FaUsers  } from 'react-icons/fa';

const Caracterestique = () => {
  return (
    <section id="caracterstiques" className="caracteristiques-section">
      <h2 className="section-title">💡 Pourquoi utiliser notre plateforme ?</h2>
      <div className="caracteristiques-container">
        <div className="carte fade-in">
          <FaClock className="carte-icon" />
          <h3>Gain de Temps</h3>
          <p>Planifiez, gérez et suivez vos véhicules en quelques clics.</p>
        </div>

        <div className="carte fade-in delay-1">
          <FaShieldAlt className="carte-icon" />
          <h3>Sécurité & Fiabilité</h3>
          <p>Vos données sont bien protégées et toujours accessibles.</p>
        </div>

        <div className="carte fade-in delay-2">
          <FaThumbsUp className="carte-icon" />
          <h3>Simplicité d’utilisation</h3>
          <p>Une interface intuitive pensée pour tous les utilisateurs DRCA.</p>
        </div>

        <div className="carte fade-in delay-3">
          <FaMobileAlt className="carte-icon" />
          <h3>Accessible partout</h3>
          <p>Utilisable depuis un ordinateur, une tablette ou un smartphone.</p>
        </div>

        
        <div className="carte fade-in delay-4">
          <FaChartLine className="carte-icon" />
          <h3>Suivi des Performances</h3>
          <p>Analysez l’utilisation de vos véhicules avec des rapports clairs.</p>
        </div>

        
        <div className="carte fade-in delay-5">
          <FaUsers className="carte-icon" />
          <h3>Multi-utilisateurs</h3>
          <p>Accès différencié pour les administrateurs et chauffeurs.</p>
        </div>
      </div>
    </section>
  );
};

export default Caracterestique;
