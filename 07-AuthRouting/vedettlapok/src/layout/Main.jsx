import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";

import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import PublicPage from "../pages/PublicPage";
import Login from "../pages/Login";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<PublicPage />} />
        <Route path="/login" element={<Login />} />

        {/* Védett útvonalak */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>{" "}
    </main>
  );
};

export default Main;
