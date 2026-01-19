import { useContext } from "react";
import { SettingsProvider } from "./context/SettingsProvider";
import { SettingsContext } from "./context/SettingsContext";
import SettingsPanel from "./components/SettingsPanel";
import "./App.css";

// App komponens
function App() {
  return (
    <SettingsProvider>
      <AppContent />
    </SettingsProvider>
  );
}

// Belső komponens, ami már használhatja a Contextet
const AppContent = () => {
  const { theme } = useContext(SettingsContext);

  return (
    <div className={`app ${theme}`}>
      {console.log("APP current theme:", theme)}
      <h1>Beállítások kezelése Context API-val</h1>
      <SettingsPanel />
    </div>
  );
};

export default App;
