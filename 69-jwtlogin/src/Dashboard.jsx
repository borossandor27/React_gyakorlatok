// src/Dashboard.js
import React from 'react';
import api from './api';

export default function Dashboard({ onLogout }) {
    const handleLogout = () => {
        localStorage.removeItem('token');
        delete api.defaults.headers.common['Authorization'];
        onLogout(); // Visszalépés a login oldalra
    };

    return (
        <div>
            <h1>Üdvözöllek a védett oldalon!</h1>
            <button onClick={handleLogout}>Kijelentkezés</button>
        </div>
    );
}
