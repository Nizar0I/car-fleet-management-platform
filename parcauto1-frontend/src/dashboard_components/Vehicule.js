import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLayout from '../AdminLayout';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
//import '../confirm.css';

function Vehicule() {
  const [form, setForm] = useState({
    marque: '',
    modele: '',
    immatriculation: '',
    date_acquisition: '',
    kilometrage: '',
  });

  const [vehicules, setVehicules] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  //code serchbar
  const [searchTerm, setSearchTerm] = useState('');
  const filteredVehicules = vehicules.filter(v =>
  v.marque.toLowerCase().includes(searchTerm.toLowerCase()) ||
  v.modele.toLowerCase().includes(searchTerm.toLowerCase()) ||
  v.immatriculation.toLowerCase().includes(searchTerm.toLowerCase())||
  v.date_acquisition.includes(searchTerm));
 



  // Charger les véhicules à l'ouverture
  useEffect(() => {
    fetchVehicules();
  }, []);

  const fetchVehicules = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/vehicules');
      setVehicules(res.data);
    } catch (err) {
      console.error('Erreur de chargement', err);
    }
  };
  
  const deleteVehicule = (id) => {
  confirmAlert({
    title: 'Confirmation de suppression',
    message: 'Voulez-vous vraiment supprimer ce véhicule ?',
    buttons: [
      {
        label: 'Oui',
        onClick: async () => {
          try {
            await axios.delete(`http://127.0.0.1:8000/api/vehicules/${id}`);
            toast.success("Véhicule supprimé !");
            fetchVehicules();
          } catch (err) {
            toast.error("Erreur lors de la suppression.");
            console.error(err);
          }
        }
      },
      {
        label: 'Non'
      }
    ]
  });
};

//   const deleteVehicule = async (id) => {
//   if (!window.confirm("Voulez-vous vraiment supprimer ce véhicule ?")) return;

//   try {
//     await axios.delete(`http://127.0.0.1:8000/api/vehicules/${id}`);
//     alert("Véhicule supprimé !");
//     fetchVehicules(); // Recharge la liste
//   } catch (err) {
//     alert("Erreur lors de la suppression.");
//     console.error(err);
//   }
// };


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    if (editing) {
      await axios.put(`http://127.0.0.1:8000/api/vehicules/${editId}`, form);
      toast.success("Véhicule modifié !");
    } else {
      await axios.post('http://127.0.0.1:8000/api/vehicules', form);
      toast.success("Véhicule ajouté !");
    }

    setForm({
      marque: '',
      modele: '',
      immatriculation: '',
      date_acquisition: '',
      kilometrage: '',
    });
    setEditing(false);
    setEditId(null);
    fetchVehicules();

  } catch (error) {
    toast.error("Erreur lors de l'enregistrement.");
    console.error(error);
  }
};


//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     if (editing) {
//       await axios.put(`http://127.0.0.1:8000/api/vehicules/${editId}`, form);
//       alert("Véhicule modifié !");
//     } else {
//       await axios.post('http://127.0.0.1:8000/api/vehicules', form);
//       alert("Véhicule ajouté !");
//     }

//     setForm({
//       marque: '',
//       modele: '',
//       immatriculation: '',
//       date_acquisition: '',
//       kilometrage: '',
//     });
//     setEditing(false);
//     setEditId(null);
//     fetchVehicules();
//   } catch (error) {
//     alert("Erreur lors de l'enregistrement.");
//   }
// };


  return (
    <AdminLayout>
      {/* barre de recherche */}
      <div className="input-group mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
  <span className="input-group-text bg-primary text-white">🔍</span>
  <input
    type="text"
    className="form-control shadow-sm"
    placeholder="Rechercher par marque, modèle, immatriculation..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  {searchTerm && (
    <button
      className="btn btn-outline-secondary"
      type="button"
      onClick={() => setSearchTerm('')}
    >
      ❌ Effacer
    </button>
  )}
   </div>
   {/* end barre de recherche */}

      <h2 className="text-center mt-4">
  {editing ? "🛠️ Modifier un véhicule" : "🚗 Ajouter un nouveau véhicule"}
  </h2>

      {/* Formulaire d'ajout */}
      <form onSubmit={handleSubmit} className="container mt-4">
  <div className="row g-3">
    <div className="col-md-4">
      
      <input type="text" name="marque" placeholder="Marque"
      className="form-control" value={form.marque} onChange={handleChange} required />
    </div>
    <div className="col-md-4">
      <input type="text" name="modele" placeholder="Modèle"
        className="form-control" value={form.modele} onChange={handleChange} required />
    </div>
    <div className="col-md-4">
      <input type="text" name="immatriculation" placeholder="Immatriculation"
        className="form-control" value={form.immatriculation} onChange={handleChange} required />
    </div>
    <div className="col-md-6">
      <input type="date" name="date_acquisition"
        className="form-control" value={form.date_acquisition} onChange={handleChange} required />
    </div>
    <div className="col-md-6">
      <input type="number" name="kilometrage" placeholder="Kilométrage"
        className="form-control" value={form.kilometrage} onChange={handleChange} required />
    </div>
    <div className="col-12">
      <button type="submit" className={`btn ${editing ? 'btn-warning' : 'btn-primary'} me-2`}>
        {editing ? "Modifier" : "Ajouter"}
      </button>

      {editing && (
        <button type="button" className="btn btn-secondary"
          onClick={() => {
            setEditing(false);
            setEditId(null);
            setForm({
              marque: '',
              modele: '',
              immatriculation: '',
              date_acquisition: '',
              kilometrage: '',
            });
          }}>
          Annuler
        </button>
      )}
    </div>
  </div>
</form>
{/* ----------------------------------------------------------------------------------------------- */}



      {/* Tableau des véhicules */}
      <table className="table table-striped table-hover mt-5 text-center">
  <thead className="table-primary">
    <tr>
      <th>ID</th>
      <th>Marque</th>
      <th>Modèle</th>
      <th>Immatriculation</th>
      <th>Date Acquisition</th>
      <th>Kilométrage</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {filteredVehicules.map(v => (
      <tr key={v.id}>
        <td>{v.id}</td>
        <td>{v.marque}</td>
        <td>{v.modele}</td>
        <td>{v.immatriculation}</td>
        <td>{v.date_acquisition}</td>
        <td>{v.kilometrage} km</td>
        <td>
          <button className="btn btn-sm btn-outline-warning me-2"
            onClick={() => {
              setEditing(true);
              setEditId(v.id);
              setForm({
                marque: v.marque,
                modele: v.modele,
                immatriculation: v.immatriculation,
                date_acquisition: v.date_acquisition,
                kilometrage: v.kilometrage,
              });
            }}>
            ✏️
          </button>
          <button className="btn btn-sm btn-outline-danger"
            onClick={() => deleteVehicule(v.id)}>
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

export default Vehicule;
