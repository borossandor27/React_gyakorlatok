import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());

// Egyszerű CORS teszt endpoint
app.get('/api/test-cors', (req, res) => {
  res.json({ 
    message: 'CORS működik!', 
    timestamp: new Date().toISOString(),
    origin: req.headers.origin
  });
});



app.post('/api/user', (req, res) => {
  // A React űrlapból küldött adatok a req.body-ban vannak.
  const registrationData = req.body;
  
  console.log('--- Új regisztráció érkezett: ---');
  console.log(`Vezetéknév: ${registrationData.lastName || 'nincs'}`);
  console.log(`Keresztnév: ${registrationData.firstName || 'nincs'}`);
  console.log(`Jelszó (nem tároljuk tisztán!): ${registrationData.password ? '******' : 'nincs'}`);
  console.log(`Születési idő: ${registrationData.dob || 'nincs'}`);
  console.log(`Irányítószám (Uncontrolled mező): ${registrationData.zipCode || 'nincs'}`);
  console.log(`Hírlevél: ${registrationData.newsletter ? 'Igen' : 'Nem'}`);
  console.log(`Érdeklődés: ${registrationData.interest || 'nincs'}`);
  console.log('------------------------------------');

  // 3. Válasz küldése a kliensnek
  res.status(201).json({ 
    message: 'Regisztráció sikeresen feldolgozva!', 
    userId: Date.now(),
    receivedData: {
      ...registrationData,
      password: undefined // Ne küldjük vissza a jelszót
    }
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    serverTime: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Hibakezelő middleware
app.use((err, req, res, next) => {
  console.error('Szerver hiba:', err);
  res.status(500).json({ 
    message: 'Szerver hiba történt',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    message: 'Az adott útvonal nem található.',
    requestedUrl: req.originalUrl,
    availableEndpoints: [
      'GET /api/test-cors',
      'GET /api/health',
      'POST /api/user',
      'OPTIONS /api/user'
    ]
  });
});

app.listen(PORT, () => {
  console.log(`✅ Szerver fut: http://localhost:${PORT}`);
  console.log(`📞 API végpontok:`);
  console.log(`   - GET  http://localhost:${PORT}/api/test-cors`);
  console.log(`   - GET  http://localhost:${PORT}/api/health`);
  console.log(`   - POST http://localhost:${PORT}/api/user`);
  console.log(`   - OPTIONS http://localhost:${PORT}/api/user`);
});