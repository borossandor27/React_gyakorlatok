import { useAuth } from '../components/AuthContext.jsx';
    
const LogOutPage = () => {
    const { logout } = useAuth();
    logout();
    return (
        <div>
            <h1>Kijelentkezés</h1>
            <p>Sikeresen kijelentkezett az alkalmazásból.</p>
        </div>
    );
};
export default LogOutPage;