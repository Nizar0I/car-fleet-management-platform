
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../AdminLayout';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';

function Maintenance() {
  const [vehicules, setVehicules] = useState([]);
  const [maintenances, setMaintenances] = useState([]);
  const [search, setSearch] = useState('');
  const [form, setForm] = useState({
    vehicule_id: '',
    description: '',
    date_maintenance: '',
    cout: '',
  });
  const [editId, setEditId] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchVehicules();
    fetchMaintenances();
  }, []);

  const fetchVehicules = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/vehicules');
      setVehicules(res.data);
    } catch (err) {
      toast.error("Erreur chargement véhicules");
    }
  };

  const fetchMaintenances = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/maintenances');
      setMaintenances(res.data);
    } catch (err) {
      toast.error("Erreur chargement maintenances");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editing
      ? `http://127.0.0.1:8000/api/maintenances/${editId}`
      : 'http://127.0.0.1:8000/api/maintenances';

    try {
      if (editing) {
        await axios.put(url, form);
        toast.success("Maintenance modifiée !");
      } else {
        await axios.post(url, form);
        toast.success("Maintenance ajoutée !");
      }
      setForm({ vehicule_id: '', description: '', date_maintenance: '', cout: '' });
      setEditing(false);
      setEditId(null);
      fetchMaintenances();
    } catch {
      toast.error("Erreur enregistrement");
    }
  };

  const handleEdit = (mnt) => {
    setForm(mnt);
    setEditId(mnt.id);
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setForm({ vehicule_id: '', description: '', date_maintenance: '', cout: '' });
    setEditing(false);
    setEditId(null);
  };

  const handleDelete = (id) => {
  confirmAlert({
    title: 'Confirmation',
    message: 'Voulez-vous vraiment supprimer cette maintenance ?',
    buttons: [
      {
        label: 'Oui',
        onClick: async () => {
          try {
            await axios.delete(`http://127.0.0.1:8000/api/maintenances/${id}`);
            toast.success("Supprimé avec succès !");
            fetchMaintenances();
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
//code filtre javascript
  const maintenancesFiltres = maintenances.filter((m) =>
    m.description.toLowerCase().includes(search.toLowerCase()) ||
    m.vehicule?.immatriculation?.toLowerCase().includes(search.toLowerCase())||
    m.date_maintenance.includes(search)
  );

  return (
    <AdminLayout>
      {/* Barre de recherche */}
      <div className="input-group mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <span className="input-group-text bg-primary text-white">🔍</span>
        <input
          type="text"
          placeholder="🔍 Rechercher..."
          className="form-control me-2"
          style={{ maxWidth: '300px' }}
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
      
      
      <h2 className="text-center mt-4">
  {editing ? "🛠️ Modifier une Maintenances" : "🔧 Gestion des Maintenances"}
  </h2>
      <form onSubmit={handleSubmit} className="mb-4" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <select name="vehicule_id" value={form.vehicule_id} onChange={handleChange} className="form-control mb-2" required>
          <option value="">-- Véhicule --</option>
          {vehicules.map(v => (
            <option key={v.id} value={v.id}>
              {v.marque} {v.modele} ({v.immatriculation})
            </option>
          ))}
        </select>
        <input name="description" placeholder="Type de maintenance" value={form.description} onChange={handleChange} className="form-control mb-2" required />
        <input type="date" name="date_maintenance" value={form.date_maintenance} onChange={handleChange} className="form-control mb-2" required />
        <input type="number" name="cout" placeholder="Coût (DH)" value={form.cout} onChange={handleChange} className="form-control mb-3" required />
        <button type="submit" className={`btn ${editing ? 'btn-warning  w-100 mb-2' : 'btn-primary  w-100 mb-2'} me-2`}>
        {editing ? "Modifier" : "Enregistrer"}
        </button>
        {editing && <button type="button" className="btn btn-secondary w-100" onClick={handleCancelEdit}>Annuler la modification</button>}
      </form>

      

      {/* Tableau */}
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Véhicule</th>
            <th>Description</th>
            <th>Date</th>
            <th>Coût (DH)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {maintenancesFiltres.map(m => (
            <tr key={m.id}>
              <td>{m.id}</td>
              <td>{m.vehicule?.immatriculation || m.vehicule_id}</td>
              <td>{m.description}</td>
              <td>{m.date_maintenance}</td>
              <td>{m.cout}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(m)}>✏️</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(m.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}

export default Maintenance;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminLayout from '../AdminLayout';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function Maintenance() {
//   const [vehicules, setVehicules] = useState([]);
//   const [maintenances, setMaintenances] = useState([]);
//   const [form, setForm] = useState({
//     vehicule_id: '',
//     description: '',
//     date_maintenance: '',
//     cout: '',
//   });
//   const [editId, setEditId] = useState(null);
//   const [editing, setEditing] = useState(false);

//   useEffect(() => {
//     fetchVehicules();
//     fetchMaintenances();
//   }, []);

//   const fetchVehicules = async () => {
//     try {
//       const res = await axios.get('http://127.0.0.1:8000/api/vehicules');
//       setVehicules(res.data);
//     } catch (err) {
//       toast.error("Erreur chargement véhicules");
//     }
//   };

//   const fetchMaintenances = async () => {
//     try {
//       const res = await axios.get('http://127.0.0.1:8000/api/maintenances');
//       setMaintenances(res.data);
//     } catch (err) {
//       toast.error("Erreur chargement maintenances");
//     }
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const url = editing
//       ? `http://127.0.0.1:8000/api/maintenances/${editId}`
//       : 'http://127.0.0.1:8000/api/maintenances';

//     try {
//       if (editing) {
//         await axios.put(url, form);
//         toast.success("Maintenance modifiée !");
//       } else {
//         await axios.post(url, form);
//         toast.success("Maintenance ajoutée !");
//       }
//       setForm({ vehicule_id: '', description: '', date_maintenance: '', cout: '' });
//       setEditing(false);
//       setEditId(null);
//       fetchMaintenances();
//     } catch {
//       toast.error("Erreur enregistrement");
//     }
//   };

//   const handleEdit = (mnt) => {
//     setForm(mnt);
//     setEditId(mnt.id);
//     setEditing(true);
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Confirmer la suppression ?")) return;
//     try {
//       await axios.delete(`http://127.0.0.1:8000/api/maintenances/${id}`);
//       toast.success("Supprimée !");
//       fetchMaintenances();
//     } catch {
//       toast.error("Erreur suppression");
//     }
//   };

//   return (
//     <AdminLayout>
//       <h2>🔧 Gestion des Maintenances</h2>
//       <form onSubmit={handleSubmit} className="mb-4" style={{ maxWidth: '500px', margin: '0 auto' }}>
//         <select name="vehicule_id" value={form.vehicule_id} onChange={handleChange} className="form-control mb-2" required>
//           <option value="">-- Véhicule --</option>
//           {vehicules.map(v => (
//             <option key={v.id} value={v.id}>
//               {v.marque} {v.modele} ({v.immatriculation})
//             </option>
//           ))}
//         </select>
//         <input name="description" placeholder="Type de maintenance" value={form.description} onChange={handleChange} className="form-control mb-2" required />
//         <input type="date" name="date_maintenance" value={form.date_maintenance} onChange={handleChange} className="form-control mb-2" required />
//         <input type="number" name="cout" placeholder="Coût (DH)" value={form.cout} onChange={handleChange} className="form-control mb-3" required />
//         <button type="submit" className="btn btn-success w-100">{editing ? "Modifier" : "Ajouter"}</button>
//       </form>

//       {/* Tableau */}
//       <table className="table table-bordered table-hover">
//         <thead className="table-dark">
//           <tr>
//             <th>ID</th>
//             <th>Véhicule</th>
//             <th>Description</th>
//             <th>Date</th>
//             <th>Coût (DH)</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {maintenances.map(m => (
//             <tr key={m.id}>
//               <td>{m.id}</td>
//               <td>{m.vehicule?.immatriculation || m.vehicule_id}</td>
//               <td>{m.description}</td>
//               <td>{m.date_maintenance}</td>
//               <td>{m.cout}</td>
//               <td>
//                 <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(m)}>✏️</button>
//                 <button className="btn btn-danger btn-sm" onClick={() => handleDelete(m.id)}>🗑️</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </AdminLayout>
//   );
// }

// export default Maintenance;

