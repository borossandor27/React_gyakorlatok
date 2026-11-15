import { UserProvider } from './context/UserProvider.jsx'
import useAuth from './context/useAuth.js'
import LoginPage from './pages/LoginPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import './App.css'

// A contextet csak a Provider alatti komponens érheti el,
// ezért a tartalom külön komponensbe kerül.
function AppContent() {
  const { user } = useAuth()

  return user.loggedIn ? <ProfilePage /> : <LoginPage />
}

function App() {
  return (
    <UserProvider>
      <h1>Login/Logout – felhasználói állapot megosztása</h1>
      <AppContent />
    </UserProvider>
  )
}

export default App
