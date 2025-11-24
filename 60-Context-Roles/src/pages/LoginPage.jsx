import { useState } from 'react';
import { useAuth } from '../components/AuthContext.jsx'; // Adjust the import path as needed

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const result = login(username, password);
    
    if (!result.success) {
      setError(result.message);
    } else {
      // Sikeres bejelentkezés - itt lehet átirányítani vagy más műveletet végezni
      console.log(result.message);
      // Például: navigate('/dashboard');
    }
  };

  return (
    <>
      <div>
        <h1>Bejelentkezés</h1>
        <p>
          Kérjük, adja meg felhasználónevét és jelszavát a bejelentkezéshez.
        </p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Felhasználónév:</label>
        <input 
          type="text" 
          id="username" 
          name="username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required 
        />
        <br />
        
        <label htmlFor="password">Jelszó:</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        <br />
        
        <button type="submit">Bejelentkezés</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <p>Ha még nincs fiókja, <a href="/registration">regisztráljon itt</a>.</p>
    </>
  );
};

export default LoginPage;