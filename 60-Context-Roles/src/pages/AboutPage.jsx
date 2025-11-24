//import { useAuth } from "../components/AuthContext";

const AboutPage = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <div>
        {user.isLoggedIn ? (
          <div>
            <h1>Üdvözöljük, {user.userName}!</h1>
            <p>Szerepkör: {user.role}</p>
            <button onClick={logout}>Kijelentkezés</button>
          </div>
        ) : (
          <p>Kérjük, jelentkezzen be!</p>
        )}
      </div>
      <p>
        Ez az alkalmazás a felhasználói szerepkörök kezelését demonstrálja React
        Context segítségével.
      </p>
    </>
  );
};

export default AboutPage;
