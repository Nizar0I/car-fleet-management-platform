// import './Auth.css';
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Register() {
//   const [form, setForm] = useState({ name: '', email: '', password: '' });
//   const navigate = useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://127.0.0.1:8000/api/register', form);
//       localStorage.setItem("token", res.data.token);
//       alert("Inscription réussie !");
//       navigate("/login");
//     } catch (error) {
//       if (error.response && error.response.data?.errors) {
//         console.log("Validation error:", error.response.data.errors);
//         alert("Erreur : " + JSON.stringify(error.response.data.errors));
//       } else {
//         alert("Erreur inconnue !");
//       }
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Inscription</h2>
//       <form onSubmit={handleSubmit}>
//       <input placeholder="Nom" onChange={(e) => setForm({...form, name: e.target.value})} />
//       <input placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})} />
//       <input type="password" placeholder="Mot de passe" onChange={(e) => setForm({...form, password: e.target.value})} />
//       <button type="submit">S'inscrire</button>
//     </form>
//     </div>
//   );
// }

// export default Register;
