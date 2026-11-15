import { createContext } from 'react';

// Context létrehozása. A Provider komponens külön fájlban van (ThemeProvider.jsx),
// hogy a komponenst tartalmazó fájl csak komponenst exportáljon.
export const ThemeContext = createContext();
