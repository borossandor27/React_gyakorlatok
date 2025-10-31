import React, { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");

  // Betöltés a localStorage-ból, amikor az oldal betöltődik
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

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
