import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Navigation = () => {
  const { user, logout } = useAuth();

  return (
    <nav>
      {/* A Link nem tölti újra az oldalt, így az alkalmazás állapota megmarad.
          Sima <a href="..."> esetén a böngésző az egész alkalmazást újratöltené. */}
      <Link to="/">Főoldal</Link>

      {/* Szerepkör alapú megjelenítés */}
      {user.isLoggedIn && <Link to="/profile">Profil</Link>}

      {/* Csak Admin hivatkozás */}
      {user.role === "admin" && <Link to="/admin">Admin Kezelőfelület</Link>}
      <Link to="/about">Az alkalmazásról</Link>

      {/* Bejelentkezés/Kijelentkezés gomb dinamikusan */}
      {user.isLoggedIn ? (
        <>
          <p>
            Üdv, {user.userName} ({user.role})
          </p>
          <button onClick={logout}>Kijelentkezés ({user.role})</button>
        </>
      ) : (
        <Link to="/login">Bejelentkezés</Link>
      )}
    </nav>
  );
};

export default Navigation;
