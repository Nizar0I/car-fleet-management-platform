// src/dashboard_components/Reclamations.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../AdminLayout';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import '../Reclamations.css';


function Reclamations() {
  const [reclamations, setReclamations] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    nom_complet: '',
    marque_auto: '',
    immatriculation: '',
    description: ''
  });

  useEffect(() => {
    fetchReclamations();
  }, []);

  const fetchReclamations = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/reclamations');
      setReclamations(res.data);
    } catch (err) {
      toast.error("Erreur lors du chargement des réclamations");
    }
  };

  const handleDelete = (id) => {
    confirmAlert({
      title: 'Confirmation',
      message: 'Voulez-vous vraiment supprimer cette réclamation ?',
      buttons: [
        {
          label: 'Oui',
          onClick: async () => {
            try {
              await axios.delete(`http://127.0.0.1:8000/api/reclamations/${id}`);
              toast.success("Réclamation supprimée !");
              fetchReclamations();
            } catch (err) {
              toast.error("Erreur lors de la suppression !");
            }
          }
        },
        {
          label: 'Non'
        }
      ]
    });
  };

  const handleEdit = (reclamation) => {
    setEditingId(reclamation.id);
    setFormData({
      nom_complet: reclamation.nom_complet,
      marque_auto: reclamation.marque_auto,
      immatriculation: reclamation.immatriculation,
      description: reclamation.description
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/api/reclamations/${editingId}`, formData);
      toast.success("Réclamation mise à jour !");
      setEditingId(null);
      fetchReclamations();
    } catch (err) {
      toast.error("Erreur lors de la mise à jour");
    }
  };
  const handleCancelEdit = () => {
  setEditingId(null);
  setFormData({
    nom_complet: '',
    marque_auto: '',
    immatriculation: '',
    description: ''
    });
   };

  return (
    <AdminLayout>
      <h2>📋 Liste des Réclamations</h2>

      {editingId && (
  <div className="reclamations-form-container">
    <form onSubmit={handleUpdate} className="reclamations-form">
      <h4 className='form-title'>Modifier la réclamation</h4>

      <input
        type="text"
        name="nom"
        placeholder="Nom Complet"
        value={formData.nom_complet}
        onChange={e => setFormData({ ...formData, nom_complet: e.target.value })}
        required
      />
      <input
        type="text"
        name="marque"
        placeholder="Marque"
        value={formData.marque_auto}
        onChange={e => setFormData({ ...formData, marque_auto: e.target.value })}
        required
      />
      <input
        type="text"
        name="immatriculation"
        placeholder="Immatriculation"
        value={formData.immatriculation}
        onChange={e => setFormData({ ...formData, immatriculation: e.target.value })}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={e => setFormData({ ...formData, description: e.target.value })}
        required
      ></textarea>

      <div className="btn-group">
        <button type="submit" className="btn btn-primary">💾 Sauvegarder</button>
        <button
          type="button"
          onClick={handleCancelEdit}
          className="btn btn-secondary"
        >
          Annuler
        </button>
      </div>
    </form>
  </div>
)}

  <table className="reclamations-table">
  <thead>
    <tr>
      <th>Nom Complet</th>
      <th>Marque Auto</th>
      <th>Immatriculation</th>
      <th>Description</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {reclamations.map(r => (
      <tr key={r.id}>
        <td>{r.nom_complet}</td>
        <td>{r.marque_auto}</td>
        <td>{r.immatriculation}</td>
        <td>{r.description}</td>
        <td>
          <button onClick={() => handleEdit(r)} className="btn-edit">✏</button>
          <button onClick={() => handleDelete(r.id)} className="btn-delete">🗑</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
    </AdminLayout>
  );
}

export default Reclamations;