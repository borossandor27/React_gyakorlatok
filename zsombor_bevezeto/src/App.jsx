import './App.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

// A komponens neve NAGYBETŰVEL kezdődik. A kisbetűs <addTorpe> elemet a React
// HTML elemnek tekintené, és a komponens függvénye le sem futna.
function AddTorpe({ onAddTorpe }) {
  const [ujTorpe, setUjTorpe] = useState(''); // Állapot alapértelmezett értéke üres string
  return (
    <div>
      <input
        type="text"
        value={ujTorpe}
        onChange={e => setUjTorpe(e.target.value)}
      />
      <button onClick={() => {
        onAddTorpe(ujTorpe);
        setUjTorpe(''); // hozzáadás után kiürítjük a mezőt
      }}>Add Torpe ({ujTorpe.length})</button>
    </div>
  );
}

// A propok típusának ellenőrzése a komponenshez tartozik
AddTorpe.propTypes = {
  onAddTorpe: PropTypes.func.isRequired,
};

function App() {
  const [torpek, setTorpek] = useState(['Tudor', 'Vidor', 'Szende', 'Hapci', 'Kuka']); //  Morgó, Szundi
  return (
    <>
      <div>
        {torpek.map((torpe, index) => (
          <div key={index} style={{ border: '1px solid black', padding: '5px', margin: '5px' }}>
            {torpe}
          </div>
        ))}
        <AddTorpe onAddTorpe={
          (ujTorpe) => {
            if (ujTorpe.trim()) { // Ellenőrizzük, hogy az új törpe neve nem üres
              setTorpek([...torpek, ujTorpe.trim()]);
            }
          }
        } />
      </div>
    </>
  );
}


export default App;
