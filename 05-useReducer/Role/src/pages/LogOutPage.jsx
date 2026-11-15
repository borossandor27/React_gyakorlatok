import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext.jsx';

const LogOutPage = () => {
    const { logout } = useAuth();

    // Állapotot renderelés közben nem módosíthatunk, ezért a kijelentkezést
    // effektben végezzük: egyszer fut le, amikor az oldal megjelenik.
    useEffect(() => {
        logout();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h1>Kijelentkezés</h1>
            <p>Sikeresen kijelentkezett az alkalmazásból.</p>
        </div>
    );
};
export default LogOutPage;
