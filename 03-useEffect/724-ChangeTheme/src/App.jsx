import React, { useEffect, useState } from "react";

function App() {
  // Alapértelmezett téma: 'light'
  const [theme, setTheme] = useState("light");

  // Betöltéskor ellenőrizzük, volt-e mentett téma
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme; // <-- beállítjuk a body osztályát
    }
  }, []);

  // Ha változik a téma, mentjük és frissítjük a DOM-ot is
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="ButtonPanel">
      <h2>Aktuális téma: {theme}</h2>
      <button onClick={() => setTheme("light")}>🌞 Világos mód</button>
      <button onClick={() => setTheme("dark")}>🌙 Sötét mód</button>
    </div>
  );
}

export default App;
