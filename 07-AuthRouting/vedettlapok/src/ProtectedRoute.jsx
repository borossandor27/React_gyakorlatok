import { Navigate, useLocation, Route } from 'react-router-dom';
import { useAuth } from './AuthContext'; // vagy useState
import Dashboard from './pages/Dashboard';

function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div>Betöltés...</div>; // Spinner komponens
  }

  if (!isAuthenticated) {
    // Átirányítjuk a bejelentkezés oldalra, mentjük a kívánt helyet
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

// Használat:
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

export default ProtectedRoute;