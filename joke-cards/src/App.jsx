import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await axios.get('https://merlinvizsga.hu/api/vicc/');
        setJokes(response.data);
      } catch (error) {
        console.error('Error fetching the jokes:', error);
      }
    };

    fetchJokes();
  }, []);

  return (
    <div className="App">
      <h1>Jokes</h1>
      <div className="joke-list">
        {jokes.map((joke, index) => (
          <div key={index} className="joke-card">
             <p dangerouslySetInnerHTML={{ __html: joke.viccszovege }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
