// src/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api', // Itt cseréld ki saját API-dra
});

// Token beállítása, ha van mentve
const token = localStorage.getItem('token');
if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default api;
