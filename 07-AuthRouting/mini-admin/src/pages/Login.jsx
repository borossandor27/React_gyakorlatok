import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("auth", "true");
    navigate("/dashboard");
  };

  return <button onClick={login}>Login</button>;
}

export default Login;