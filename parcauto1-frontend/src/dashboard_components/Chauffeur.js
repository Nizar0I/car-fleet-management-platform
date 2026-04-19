import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLayout from '../AdminLayout';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import '../Chauffeur.css';

function Chauffeur() {
  const [chauffeurs, setChauffeurs] = useState([]);
  const [formData, setFormData] = useState({
    nom_complet: '',
    cin: '',
    email: '',
    telephone: ''
  });
  const [editingId, setEditingId] = useState(null);

  const fetchChauffeurs = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/chauffeurs');
      setChauffeurs(res.data);
    } catch (err) {
      toast.error("Erreur lors du chargement.");
    }
  };

  useEffect(() => {
    fetchChauffeurs();
  }, []);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`http://127.0.0.1:8000/api/chauffeurs/${editingId}`, formData);
        toast.success("Chauffeur modifié !");
      } else {
        await axios.post(`http://127.0.0.1:8000/api/chauffeurs`, formData);
        toast.success("Chauffeur ajouté !");
      }
      setFormData({ nom_complet: '', cin: '', email: '', telephone: '' });
      setEditingId(null);
      fetchChauffeurs();
    } catch (err) {
      console.error(err.response?.data);
      toast.error("Erreur lors de l'enregistrement.");
    }
  };

  const handleEdit = chauffeur => {
    setFormData({
      nom_complet: chauffeur.nom_complet,
      cin: chauffeur.cin,
      email: chauffeur.email,
      telephone: chauffeur.telephone
    });
    setEditingId(chauffeur.id);
  };

  const handleDelete = async id => {
  confirmAlert({
    title: 'Confirmer la suppression',
    message: 'Êtes-vous sûr de vouloir supprimer ce chauffeur ?',
    buttons: [
      {
        label: 'Oui',
        onClick: async () => {
          try {
            await axios.delete(`http://127.0.0.1:8000/api/chauffeurs/${id}`);
            toast.success("Chauffeur supprimé !");
            fetchChauffeurs();
          } catch (err) {
            toast.error("Erreur lors de la suppression.");
          }
        }
      },
      {
        label: 'Non',
        onClick: () => {}
      }
    ]
  });
};

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({ nom_complet: '', cin: '', email: '', telephone: '' });
  };

  return (
    <AdminLayout>
      <div className="chauffeur-page">
  <h2>👨‍✈ Gestion des Conseiller Agricole</h2>

  <form onSubmit={handleSubmit} className="form-style">
    <input type="text" name="nom_complet" placeholder="Nom complet" value={formData.nom_complet} onChange={handleChange} required />
    <input type="text" name="cin" placeholder="CIN" value={formData.cin} onChange={handleChange} required />
    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
    <input type="tel" name="telephone" placeholder="Téléphone" value={formData.telephone} onChange={handleChange} required />

    <div className="form-buttons">
      <button type="submit" className="btn btn-success">
        {editingId ? '💾 Modifier' : '➕ Ajouter'}
      </button>
      {editingId && (
        <button type="button" onClick={handleCancelEdit} className="btn btn-cancel">
          ❌ Annuler
        </button>
      )}
    </div>
  </form>


      <table className="table">
        <thead>
          <tr>
            <th>Nom complet</th>
            <th>CIN</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {chauffeurs.map(ch => (
            <tr key={ch.id}>
              <td>{ch.nom_complet}</td>
              <td>{ch.cin}</td>
              <td>{ch.email}</td>
              <td>{ch.telephone}</td>
              <td>
                <button className="btn btn-warning btn-sm" onClick={() => handleEdit(ch)}>✏</button>{' '}
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(ch.id)}>🗑</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </AdminLayout>
  );
}

export default Chauffeur;