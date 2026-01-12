import { NavLink } from "react-router-dom";
import { useAuth } from "../AuthContext"; // Importáld be a hookot

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth(); // Kérd le az állapotot és a kijelentkezést

  return (
    <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            
            {/* Csak bejelentkezett felhasználóknak látható linkek */}
            {isAuthenticated && (
              <>
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><button onClick={logout}>Logout</button></li>
              </>
            )}

            {/* Login csak akkor látszik, ha nincs belépve */}
            {!isAuthenticated && (
              <li><NavLink to="/login">Login</NavLink></li>
            )}
        </ul>
    </nav>
  );
}

export default Navbar;