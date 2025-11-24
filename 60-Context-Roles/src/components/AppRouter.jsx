// Router.jsx
import { Routes, Route } from 'react-router-dom';
import RoleBasedRoute from './RoleBasedRoute';
import AdminDashboard from '../pages/AdminDashboard';
import UserProfile from '../pages/UserProfile';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import LogOutPage from '../pages/LogOutPage';
import AboutPage from '../pages/AboutPage';

const AppRouter = () => (
  <Routes>
    {/* Mindenki számára elérhető */}
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<LoginPage />} />
      <Route path='/registration' element={<RegistrationPage />} />
    
    {/* Védett útvonalak */}
    <Route element={<RoleBasedRoute expectedRoles={['admin']} />}>
      {/* Csak 'admin' szerepkörűek számára elérhető */}
      <Route path="/admin" element={<AdminDashboard />} />
    </Route>

    <Route element={<RoleBasedRoute expectedRoles={['admin', 'registered']} />}>
      {/* 'admin' és 'registered' szerepkörűek számára elérhető */}
      <Route path="/profile" element={<UserProfile />} />
    </Route>
    <Route path='/about' element={<AboutPage />}/>
    {/* Kilépés csak akkor elérhető, ha be van jelentkezve */}
    <Route path="/logout" element={<LogOutPage />} />

  </Routes>
);

export default AppRouter;