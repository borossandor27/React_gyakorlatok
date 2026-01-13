import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("auth") === "true";

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <nav>
      <NavLink to="/">Home</NavLink> |{" "}
      <NavLink to="/users">Users</NavLink> |{" "}
      
      {isAuth && (
        <>
          <NavLink to="/dashboard">Dashboard</NavLink> |{" "}
          <button onClick={logout}>Kilépés</button>
        </>
      )}

      {!isAuth && (
        <>
          | <NavLink to="/login">Login</NavLink>
        </>
      )}
    </nav>
  );
}

export default Navbar;