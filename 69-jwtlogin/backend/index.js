import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Ál felhasználó
const mockUser = {
    username: 'admin',
    password: '1234',
};

// Login végpont
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (username === mockUser.username && password === mockUser.password) {
        // Visszaadunk egy kamu JWT tokent
        res.json({ token: 'mocked-jwt-token-123456789' });
    } else {
        res.status(401).json({ message: 'Hibás felhasználónév vagy jelszó' });
    }
});

// Teszt GET (opcionális)
app.get('/api/protected', (req, res) => {
    const authHeader = req.headers['authorization'];
    if (authHeader === 'Bearer mocked-jwt-token-123456789') {
        res.json({ message: 'Sikeres hozzáférés a védett adathoz.' });
    } else {
        res.status(403).json({ message: 'Hozzáférés megtagadva.' });
    }
});

app.listen(PORT, () => {
    console.log(`Backend fut a http://localhost:${PORT} címen`);
});
