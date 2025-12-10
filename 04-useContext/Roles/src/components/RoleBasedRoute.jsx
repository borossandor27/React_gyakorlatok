import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext'; 

// expectedRoles: a szerepkörök listája, amik hozzáférhetnek az útvonalhoz (pl. ['admin', 'registered'])
const RoleBasedRoute = ({ expectedRoles }) => {
  const { user, isLoading } = useAuth(); // BETÖLTJÜK AZ isLoading-ot
  
  // 0. Várjuk meg, amíg az adatok betöltése befejeződik (a localStorage ellenőrzése)
  if (isLoading) {
    // Lehet, hogy itt egy loader komponenst kellene megjeleníteni
    return <div>Betöltés...</div>; 
  }

  // 1. Ellenőrizd, hogy a felhasználó be van-e jelentkezve
  if (!user.isLoggedIn) {
    // Ha nincs bejelentkezve, átirányít a bejelentkező oldalra
    return <Navigate to="/login" replace />;
  }

  // 2. Ellenőrizd a jogosultságot
  const hasAccess = expectedRoles.includes(user.role);

  if (!hasAccess) {
    // Ha be van jelentkezve, de nincs jogosultsága, átirányít a főoldalra/hibaoldalra
    return <Navigate to="/" replace />; 
  }

  // 3. Ha minden rendben, megjeleníti az útvonal tartalmát
  return <Outlet />;
};

export default RoleBasedRoute;