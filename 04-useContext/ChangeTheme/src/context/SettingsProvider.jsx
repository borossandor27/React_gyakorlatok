import { useState } from "react";
import { SettingsContext } from "./SettingsContext";

const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    theme: "light",
    language: "hu",
    notifications: true,
  });

  const updateSettings = (newSettings) => {
    console.log("Beállítások frissítése...", newSettings);
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };
  console.log("PROVIDER current theme:", settings.theme);
  
  return (
    <SettingsContext.Provider value={{ ...settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsProvider};
