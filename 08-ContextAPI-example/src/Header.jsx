import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext); // Téma és váltás elérése

    return (
        <header style={{ padding: '10px', backgroundColor: theme === 'light' ? '#f9f9f9' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
            <h1>App Header</h1>
            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
            </button>
        </header>
    );
};

export default Header;
