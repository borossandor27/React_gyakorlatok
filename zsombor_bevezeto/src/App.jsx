import './App.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

PropTypes.addTorpe = PropTypes.func;
PropTypes.onAddTorpe = PropTypes.func;
function addTorpe({ onAddTorpe}) {
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
      }}>Add Torpe ({ujTorpe.length})</button>
    </div>
  );
}
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
        <addTorpe onAddTorpe={
          (ujTorpe) => {
            if (ujTorpe.trim()) { // Ellenőrizzük, hogy az új törpe neve nem üres
              setTorpek([...torpek, ujTorpe]);
            }
          }
        } />
      </div>
    </>
  );
}


export default App;
