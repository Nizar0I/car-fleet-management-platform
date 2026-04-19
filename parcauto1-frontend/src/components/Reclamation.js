import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Reclamation.css';
import { toast } from 'react-toastify';
import { FaPaperPlane } from 'react-icons/fa';

function Reclamation() {
  const [form, setForm] = useState({
    nom_complet: '',
    marque_auto: '',
    immatriculation: '',
    description: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.nom_complet || !form.marque_auto || !form.immatriculation || !form.description) {
      toast.error("Veuillez remplir tous les champs !");
      return;
    }

    try {
      await axios.post('http://127.0.0.1:8000/api/reclamations', form);
      toast.success("Réclamation envoyée avec succès !");
      setForm({ nom_complet: '', marque_auto: '', immatriculation: '', description: '' });
    } catch (error) {
      console.error('Erreur backend :', error);
      toast.error("Erreur lors de l'envoi !");
    }
  };

  return (
    <section id="reclamation" className="reclamations-section">
      <h2 className="reclamations-title">📣 Déposer une réclamation</h2>
      <form className="reclamations-form" onSubmit={handleSubmit}>
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
          name="marque_auto"
          placeholder="Marque du véhicule"
          value={form.marque_auto}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="immatriculation"
          placeholder="Immatriculation"
          value={form.immatriculation}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Décrivez le problème rencontré"
          value={form.description}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">
          <FaPaperPlane style={{ marginRight: '8px' }} />
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default Reclamation;
// import React, { useState } from 'react';
// import '../styles/Reclamation.css';
// import { toast } from 'react-toastify';
// import { FaPaperPlane } from 'react-icons/fa';

// function Reclamation() {
//   const [form, setForm] = useState({
//     nom: '',
//     marque: '',
//     immatriculation: '',
//     description: ''
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!form.nom || !form.marque || !form.immatriculation || !form.description) {
//       toast.error("Veuillez remplir tous les champs !");
//       return;
//     }

//     // Ici, tu pourras envoyer les données au backend plus tard
//     console.log('Réclamation envoyée :', form);
//     toast.success("Réclamation envoyée avec succès !");
//     setForm({ nom: '', marque: '', immatriculation: '', description: '' });
//   };

//   return (
//     <section className="reclamations-section">
//       <h2 className="reclamations-title">📣 Déposer une réclamation</h2>
//       <form className="reclamations-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="nom"
//           placeholder="Nom complet"
//           value={form.nom}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="marque"
//           placeholder="Marque du véhicule"
//           value={form.marque}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="immatriculation"
//           placeholder="Immatriculation"
//           value={form.immatriculation}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="description"
//           placeholder="Décrivez le problème rencontré"
//           value={form.description}
//           onChange={handleChange}
//           required
//         ></textarea>

//         <button type="submit">
//           <FaPaperPlane style={{ marginRight: '8px' }} />
//           Envoyer
//         </button>
//       </form>
//     </section>
//   );
// }
// export default Reclamation;


