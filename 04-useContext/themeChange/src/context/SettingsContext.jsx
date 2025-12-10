import { createContext } from "react";

const SettingsContext = createContext({
  theme: "light",
  language: "hu",
  notifications: true,
  updateSettings: () => {},
});

export { SettingsContext };
