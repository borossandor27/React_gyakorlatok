import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Content = () => {
    const { theme } = useContext(ThemeContext); // Csak a témát érjük el

    return (
        <main style={{ padding: '20px', backgroundColor: theme === 'light' ? '#fff' : '#222', color: theme === 'light' ? '#000' : '#ddd' }}>
            <p>The current theme is <strong>{theme}</strong>.</p>
        </main>
    );
};

export default Content;
