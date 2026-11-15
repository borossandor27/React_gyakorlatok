import { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from './ThemeContext';

// Context provider komponens
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // Állapot kezelése

    // Téma váltás funkció
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
