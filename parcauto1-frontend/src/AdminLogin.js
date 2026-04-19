import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminLogin() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null); // "error" ou "success"
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null); // reset message

    try {
      const res = await axios.post('http://127.0.0.1:8000/api/admin/login', form);
      localStorage.setItem("token", res.data.token);
      setMessage("✅ Connexion réussie ! Redirection en cours...");
      setMessageType("success");
      setTimeout(() => navigate('/dashboard'), 1500); // redirection après 1.5s
    } catch (err) {
      if (err.response?.status === 401) {
        setMessage("❌ Email ou mot de passe incorrect !");
      } else {
        setMessage("❌ Une erreur s'est produite !");
      }
      setMessageType("error");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <h2 className="text-center mb-4">Connexion Admin</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email"
            onChange={e => setForm({ ...form, email: e.target.value })}
            required className="form-control mb-3" />
          <input type="password" name="password" placeholder="Mot de passe"
            onChange={e => setForm({ ...form, password: e.target.value })}
            required className="form-control mb-3" />
          <button type="submit" className="btn btn-primary w-100">Se connecter</button>
        </form>

        {message && (
          <div className={`alert mt-3 ${messageType === 'success' ? 'alert-success animate-fade' : 'alert-danger animate-shake'}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminLogin;



// // src/AdminLogin.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './AdminLogin.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


// function AdminLogin() {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://127.0.0.1:8000/api/admin/login', form);
//       localStorage.setItem("token", res.data.token);
//       navigate('/dashboard'); // rediriger vers le dashboard
//     } catch (err) {
//       alert("Échec de la connexion admin");
//     }
//   };

//   return (
//     <div className="admin-login-container">
//         <div className="admin-login-card">
//       <h2 className="text-center mb-4">Connexion Admin</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="email" name="email" placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} required className="form-control mb-3"/>
//         <input type="password" name="password" placeholder="Mot de passe" onChange={e => setForm({...form, password: e.target.value})} required className="form-control mb-3"/>
//         <button type="submit" className="btn btn-primary w-100">Se connecter</button>
//       </form>
//       </div>
//     </div>
//   );
// }

// export default AdminLogin;
