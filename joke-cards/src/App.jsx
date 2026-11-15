import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await axios.get('https://merlinvizsga.hu/api/vicc/');
        setJokes(response.data);
      } catch (error) {
        console.error('Error fetching the jokes:', error);
        setError('Nem sikerült betölteni a vicceket.');
      }
    };

    fetchJokes();
  }, []);

  return (
    <div className="App">
      <h1>Jokes</h1>
      {error && <p>{error}</p>}
      <div className="joke-list">
        {jokes.map((joke, index) => (
          <div key={index} className="joke-card">
            {/* FIGYELEM: a dangerouslySetInnerHTML a kapott szöveget HTML-ként szúrja be,
                ezért csak megbízható forrásból származó adattal használható.
                Ismeretlen forrás esetén a szöveget előbb meg kell tisztítani
                (pl. a DOMPurify csomaggal), különben XSS támadásra ad lehetőséget. */}
            <p dangerouslySetInnerHTML={{ __html: joke.viccszovege }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
