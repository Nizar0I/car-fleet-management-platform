// import './Auth.css';
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://127.0.0.1:8000/api/login', form);
//       localStorage.setItem("token", res.data.token);
//       navigate('/dashboard');
//       alert("Connexion réussie !");
//     } catch (err) {
//       alert("Échec de la connexion.");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Connexion</h2>
//       <form onSubmit={handleSubmit}>
//         <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
//         <input type="password" placeholder="Mot de passe" onChange={e => setForm({ ...form, password: e.target.value })} />
//         <button type="submit">Se connecter</button>
//       </form>
//     </div>
//   );
// }

// export default Login;
