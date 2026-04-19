// src/dashboard_components/Vignette.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../AdminLayout';
import { toast } from 'react-toastify';
import '../Vignette.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function Vignette() {
  const [vehicules, setVehicules] = useState([]);
  const [vignettes, setVignettes] = useState([]);
  const [annee, setAnnee] = useState(new Date().getFullYear());
  const [vehiculeId, setVehiculeId] = useState('');

  useEffect(() => {
    fetchVehicules();
    fetchVignettes();
  }, []);

  const fetchVehicules = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/vehicules');
      setVehicules(res.data);
    } catch (err) {
      toast.error("Erreur de chargement des véhicules");
    }
  };

  const fetchVignettes = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/vignettes');
      setVignettes(res.data);
    } catch (err) {
      toast.error("Erreur de chargement des vignettes");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!vehiculeId || !annee) return toast.error("Champs requis");

    try {
      await axios.post('http://127.0.0.1:8000/api/vignettes', {
        vehicule_id: vehiculeId,
        annee: annee
      });
      toast.success("Vignette générée !");
      setVehiculeId('');
      fetchVignettes();
      } catch (err) {
      console.error("Erreur backend :", err.response?.data || err.message);
      toast.error("Erreur : " + (err.response?.data?.message || "Erreur serveur"));
      }
  };

  const handleDownload = (pdfName) => {
  const url = `http://127.0.0.1:8000/storage/vignettes/${pdfName}`;
  window.open(url, '_blank');
  };

  const handleDelete = (id) => {
  confirmAlert({
    title: 'Confirmation',
    message: 'Voulez-vous vraiment supprimer cette vignette ?',
    buttons: [
      {
        label: 'Oui',
        onClick: async () => {
          try {
            await axios.delete(`http://127.0.0.1:8000/api/vignettes/${id}`);
            toast.success("Vignette supprimée !");
            fetchVignettes();
          } catch (err) {
            console.error("Erreur suppression :", err);
            toast.error("Erreur lors de la suppression !");
          }
        }
      },
      {
        label: 'Non',
        onClick: () => toast.info("Suppression annulée")
      }
    ]
  });
};

  return (
    <AdminLayout>  
      <h2>🧾 Générer une vignette annuelle</h2>

      <div className="vignette-form-container">
      <form onSubmit={handleSubmit} className="mb-4" style={{ maxWidth: '500px' }}>
        <select className="form-control mb-2" value={vehiculeId} onChange={e => setVehiculeId(e.target.value)} required>
          <option value="">-- Sélectionner un véhicule --</option>
          {vehicules.map(v => (
            <option key={v.id} value={v.id}>
              {v.marque} {v.modele} ({v.immatriculation})
            </option>
          ))}
        </select>
        <input
          type="number"
          className="form-control mb-2"
          placeholder="Année"
          value={annee}
          onChange={e => setAnnee(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary w-100">Générer PDF</button>
      </form>
      </div>

      <h4>📄 Vignettes générées</h4>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Véhicule</th>
            <th>Année</th>
            <th>Date</th>
            <th>Téléchargement</th>
          </tr>
        </thead>
        <tbody>
          {vignettes.map(v => (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.vehicule?.immatriculation || v.vehicule_id}</td>
              <td>{v.annee}</td>
              <td>{v.date_generation}</td>
              <td>
                <div className="action-buttons">
                <button onClick={() => handleDownload(v.fichier_pdf)} className="btn btn-success btn-sm">📥 Télécharger</button>
                <button onClick={() => handleDelete(v.id)} className="btn btn-danger btn-sm">🗑️</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}

export default Vignette;

