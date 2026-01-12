import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Ellenőrizd az elérési utat!

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState(''); // Hibaüzenet állapot
  const { login } = useAuth(); // AuthContext-ből származó login függvény
  const navigate = useNavigate(); // Navigációs hook
  const location = useLocation(); // Helyzet lekérése

  // Megnézzük, honnan érkezett a felhasználó (a ProtectedRoute-ból jöhet a 'from' state)
  const from = location.state?.from?.pathname || "/dashboard";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      // Meghívjuk a Context-ben lévő login függvényt
      await login(credentials);
      // Sikeres belépés után átirányítjuk a céloldalra
      navigate(from, { replace: true });
    } catch (err) {
      setError('Hibás e-mail cím vagy jelszó!');
      console.error("Login error:", err);
    }
  };

  return (
    <div className="login-container">
      <h2>Bejelentkezés</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Jelszó:</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Belépés</button>
      </form>
    </div>
  );
};

export default Login;