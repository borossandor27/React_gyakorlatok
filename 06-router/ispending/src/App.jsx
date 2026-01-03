import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Főoldal
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Felhasználók
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;