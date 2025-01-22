import { useState } from 'react'

function Counter() {
  // Állapot inicializálása 0 értékkel
  const [count, setCount] = useState(0);

  // Növelés funkció
  const increase = () => {
    setCount(count + 1);
  };

  // Csökkentés funkció
  const decrease = () => {
    setCount(count - 1);
  };

  // Alaphelyzetbe állítás
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", margin: "3vh auto",  }}>
      <h1>Számláló: {count}</h1>
      <button onClick={increase}>Növelés</button>
      <button onClick={decrease} style={{ marginLeft: "2em" }}>
        Csökkentés
      </button>
      <button onClick={reset} style={{ marginLeft: "2em" }}>
        Alaphelyzet
      </button>
    </div>
  );
}

export default Counter;
