// src/dashboard_components/Carburant.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLayout from '../AdminLayout';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
 import 'react-toastify/dist/ReactToastify.css';
//import '../confirm.css';




function Carburant() {
  const [vehicules, setVehicules] = useState([]);
  const [carburants, setCarburants] = useState([]);

  const [form, setForm] = useState({
    id: null,
    vehicule_id: '',
    type_carburant: '',
    quantite_litres: '',
    date_remplissage: ''
  });

  const fetchCarburants = () => {
  axios.get('http://127.0.0.1:8000/api/carburants')
    .then(res => setCarburants(res.data))
    .catch(err => console.error("Erreur chargement carburants", err));
};

//code filtre

const [search, setSearch] = useState('');
const carburantsFiltres = carburants.filter(carb =>
  (carb.vehicule?.immatriculation || '').toLowerCase().includes(search.toLowerCase()) ||
  carb.type_carburant.toLowerCase().includes(search.toLowerCase()) ||
  carb.date_remplissage.includes(search)
);



  // Charger les véhicules au montage
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/vehicules')
      .then(res => setVehicules(res.data))
      .catch(err => console.error("Erreur de chargement des véhicules", err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  const url = form.id
    ? `http://127.0.0.1:8000/api/carburants/${form.id}`
    : 'http://127.0.0.1:8000/api/carburants';

  const method = form.id ? 'put' : 'post';

  axios[method](url, form)
  .then(() => {
  toast.success(form.id ? "Modifié avec succès !" : "Carburant enregistré !");
  setForm({ id: null, vehicule_id: '', type_carburant: '', quantite_litres: '', date_remplissage: '' });
  fetchCarburants();
   })
   .catch(() => toast.error("Erreur lors de l'enregistrement."));

    // .then(() => {
    //   alert(form.id ? "Modifié avec succès !" : "Carburant enregistré !");
    //   setForm({
    //     id: null,
    //     vehicule_id: '',
    //     type_carburant: '',
    //     quantite_litres: '',
    //     date_remplissage: ''
    //   });
    //   fetchCarburants();
    // })
    // .catch(() => alert("Erreur lors de l'enregistrement."));
};


  useEffect(() => {
  axios.get('http://127.0.0.1:8000/api/vehicules')
    .then(res => setVehicules(res.data))
    .catch(err => console.error("Erreur de chargement des véhicules", err));

  fetchCarburants(); // Charger les carburants aussi
}, []);

  const handleEdit = (carb) => {
  setForm({
    id: carb.id,
    vehicule_id: carb.vehicule_id,
    type_carburant: carb.type_carburant,
    quantite_litres: carb.quantite_litres,
    date_remplissage: carb.date_remplissage
  });
};



const handleDelete = (id) => {
  confirmAlert({
    title: 'Confirmation',
    message: 'Voulez-vous vraiment supprimer ce ravitaillement ?',
    buttons: [
      {
        label: 'Oui',
        onClick: async () => {
          try {
            await axios.delete(`http://127.0.0.1:8000/api/carburants/${id}`);
            toast.success("Supprimé avec succès !");
            fetchCarburants();
          } catch (err) {
            toast.error("Erreur lors de la suppression !");
            console.error(err);
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



// const handleDelete = async (id) => {
//   if (!window.confirm("Confirmer la suppression ?")) return;
//   try {
//     await axios.delete(`http://127.0.0.1:8000/api/carburants/${id}`);
//     alert("Supprimé avec succès !");
    

//     fetchCarburants(); // Recharge
//   } catch (err) {
    
//     alert("Erreur lors de la suppression !");
//     console.error(err);
//   }
// };


  return (
    <AdminLayout>
      <div className="input-group mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <span className="input-group-text bg-primary text-white">🔍</span>
    <input
    type="text"
    placeholder="Rechercher par immatriculation, type de carburant ou date..."
    className="form-control w-50"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
  {search && (
    <button
      className="btn btn-outline-secondary ms-2"
      onClick={() => setSearch('')}
    >
      ❌ Effacer
    </button>
  )}
   </div>
      <h2>Ajouter un ravitaillement</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
        <select name="vehicule_id" value={form.vehicule_id} onChange={handleChange} required className="form-control mb-3">
          <option value="">-- Sélectionner un véhicule --</option>
          {vehicules.map(v => (
            <option key={v.id} value={v.id}>
              {v.marque} {v.modele} ({v.immatriculation})
            </option>
          ))}
        </select>

        <select name="type_carburant" value={form.type_carburant} onChange={handleChange} required className="form-control mb-3">
          <option value="">-- Type de carburant --</option>
          <option value="Essence">Essence</option>
          <option value="Diesel">Diesel</option>
          <option value="GPL">GPL</option>
        </select>

        <input type="number" step="0.1" name="quantite_litres" value={form.quantite_litres} onChange={handleChange} placeholder="Quantité en litres" required className="form-control mb-3" />

        <input type="date" name="date_remplissage" value={form.date_remplissage} onChange={handleChange} required className="form-control mb-3" />

        <button type="submit" className="btn btn-success w-100">Enregistrer</button>
        {form.id && (
  <button
    type="button"
    className="btn btn-secondary w-100 mt-2"
    onClick={() => setForm({
      id: null,
      vehicule_id: '',
      type_carburant: '',
      quantite_litres: '',
      date_remplissage: ''
    })}
  >
    Annuler la modification
  </button>
)}

      </form>
      {/* Tableau des enregistrements de carburant */}
<table className="table mt-4">
  <thead className="table-dark">
    <tr>
      <th>ID</th>
      <th>Véhicule</th>
      <th>Type</th>
      <th>Quantité (L)</th>
      <th>Date</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {carburantsFiltres.map((carb) => (
      <tr key={carb.id}>
        <td>{carb.id}</td>
        <td>{carb.vehicule?.immatriculation || carb.vehicule_id}</td>
        <td>{carb.type_carburant}</td>
        <td>{carb.quantite_litres}</td>
        <td>{carb.date_remplissage}</td>
        <td>
          <button
            className="btn btn-sm btn-warning me-2"
            onClick={() => handleEdit(carb)}
          >
            ✏️
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => handleDelete(carb.id)}
          >
            🗑️
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
    </AdminLayout>
    
  );
}



export default Carburant;

