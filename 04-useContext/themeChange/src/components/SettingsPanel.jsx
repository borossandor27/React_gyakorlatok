import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

const SettingsPanel = () => {
  const { theme, language, updateSettings } = useContext(SettingsContext);
console.log("SETTINGS PANEL current theme:", theme);
  const handleThemeChange = () => {
    console.log("Téma váltása...");
    updateSettings({ theme: theme === "light" ? "dark" : "light" });
  };

  return (
    <div>
      <p>Aktuális téma: {theme}</p>
      <p>Nyelv: {language}</p>
      <button onClick={handleThemeChange}>Téma váltása</button>
    </div>
  );
};
export default SettingsPanel;