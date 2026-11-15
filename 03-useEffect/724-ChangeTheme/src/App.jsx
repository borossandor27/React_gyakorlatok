import { useEffect, useState } from "react";

function App() {
  // A kezdőérték a mentett téma, ha van; különben 'light'.
  // A useState-nek átadott függvény csak az első rendereléskor fut le.
  // (Ha a betöltést külön useEffect végezné, a mentő effekt előbb
  // felülírná a tárolt témát az alapértelmezettel.)
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") ?? "light"
  );

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
