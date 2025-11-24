import { AuthProvider } from "./components/AuthContext.jsx";
import AppRoutes from "./components/AppRouter.jsx";
import Navigation from "./components/Navbar.jsx";

const App = () => (
  <AuthProvider>
    <Navigation />
    <AppRoutes />
  </AuthProvider>
);

export default App;
