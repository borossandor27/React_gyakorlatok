import { useAuth } from "./AuthContext";

const Navigation = () => {
  const { user, logout } = useAuth();

  return (
    <nav>
      {/* Alapértelmezett hivatkozás */}
      <a href="/">Főoldal</a>

      {/* Szerepkör alapú megjelenítés */}
      {user.isLoggedIn && <a href="/profile">Profil</a>}

      {/* Csak Admin hivatkozás */}
      {user.role === "admin" && <a href="/admin">Admin Kezelőfelület</a>}
      <a href="/about">Az alkalmazásról</a>

      {/* Bejelentkezés/Kijelentkezés gomb dinamikusan */}
      {user.isLoggedIn ? (
        <>
          <p>
            Üdv, {user.userName} ({user.role})
          </p>
          <button onClick={logout}>Kijelentkezés ({user.role})</button>
        </>
      ) : (
        <a href="/login">Bejelentkezés</a>
      )}
    </nav>
  );
};

export default Navigation;
