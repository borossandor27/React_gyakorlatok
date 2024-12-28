import  { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Context létrehozása
export const ThemeContext = createContext();

// Context provider komponens
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // Állapot kezelése

    // Téma váltás funkció
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    
    ThemeProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };
    

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
