// src/Login.js
import React, { useState } from 'react';
import api from './api';

export default function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await api.post('/login', { username, password });
            const token = response.data.token;

            // Token mentése
            localStorage.setItem('token', token);
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            onLogin(); // Tovább a védett oldalra
        } catch (err) {
            alert('Hiba a bejelentkezés során!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Felhasználónév" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Jelszó" />
            <button type="submit">Bejelentkezés</button>
        </form>
    );
}
