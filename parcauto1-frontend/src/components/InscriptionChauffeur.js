// src/components/InscriptionChauffeur.js
import React, { useState } from 'react';
import '../styles/InscriptionChauffeur.css';
import { toast } from 'react-toastify';
import { FaUserPlus } from 'react-icons/fa';
import axios from 'axios';


const InscriptionChauffeur = () => {
  const [form, setForm] = useState({
    nom_complet: '',
    cin: '',
    email: '',
    telephone: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
  e.preventDefault();

  if (!form.nom_complet || !form.cin || !form.email || !form.telephone) {
    toast.error("Veuillez remplir tous les champs !");
    return;
  }

  try {
    await axios.post('http://127.0.0.1:8000/api/chauffeurs', form);
    toast.success("Inscription envoyée avec succès !");
    setForm({ nom_complet: '', cin: '', email: '', telephone: '' });
  } catch (error) {
    console.error(error);
    toast.error("Erreur lors de l'envoi du formulaire.");
  }
};

  return (
    <section className="chauffeur-section" id="chauffeur">
      <h2 className="chauffeur-title">🧑‍✈ Inscription de conseiller agricole</h2>
      <form onSubmit={handleSubmit} className="chauffeur-form">
        <input
          type="text"
          name="nom_complet"
          placeholder="Nom complet"
          value={form.nom_complet}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cin"
          placeholder="CIN"
          value={form.cin}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="telephone"
          placeholder="Téléphone"
          value={form.telephone}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-success">
          <FaUserPlus style={{ marginRight: '8px' }} />
          S'inscrire
        </button>
      </form>
    </section>
  );
};

export default InscriptionChauffeur;