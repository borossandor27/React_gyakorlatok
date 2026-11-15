import { useState, useEffect } from "react";

function App() {
  // A kezdőértéket közvetlenül a localStorage-ból olvassuk ki.
  // A useState-nek átadott függvény csak az első rendereléskor fut le.
  // (Ha ezt külön useEffect-ben tennénk, a mentő effekt előbb felülírná
  // a tárolt értéket az üres kezdőállapottal.)
  const [name, setName] = useState(() => localStorage.getItem("name") ?? "");

  // Mentés a localStorage-ba, amikor a name változik
  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Üdv, {name || "vendég"}!</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Írd be a neved"
      />
    </div>
  );
}

export default App;
