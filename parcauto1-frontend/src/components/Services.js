import React from 'react';
import '../styles/Services.css';
import { FaTools, FaGasPump, FaFilePdf,FaUsers,FaCarAlt,FaBell } from 'react-icons/fa';

function Services() {
  const services = [
    {
      icon: <FaTools />,
      title: 'Maintenance',
      description: 'Suivi et gestion des réparations de tous les véhicules.'
    },
    {
      icon: <FaGasPump />,
      title: 'Carburant',
      description: 'Attribution, consommation et suivi des vignettes de carburant.'
    },
    {
      icon: <FaFilePdf />,
      title: 'Vignettes PDF',
      description: 'Génération automatique des vignettes annuelles en format PDF.'
    },
    {
      icon: <FaUsers />,
      title: 'Gestion des Chauffeurs',
      description: 'Ajout, mise à jour et gestion complète des chauffeurs.'
    },
    {
      icon: <FaCarAlt />,
      title: 'Gestion des Véhicules',
      description: 'Enregistrement et suivi du parc automobile.'
    },
    {
      icon: <FaBell />,
      title: 'Réclamations',
      description: 'Collecte et traitement des réclamations signalées.'
    }
  ];

  return (
    <section id="services" className="services-section">
      <h2 className="services-title">🚗 Nos Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-name">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
