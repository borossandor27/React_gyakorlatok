import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <>
      <h2>Admin Dashboard</h2>
      <p>Welcome to the admin dashboard.</p>
      <button onClick={logout}>Kilépés</button>
    </>
  );
}

export default Dashboard;