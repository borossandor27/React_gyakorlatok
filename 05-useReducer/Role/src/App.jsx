import { AuthProvider } from './context/AuthProvider'
import Navigation from './context/Navbar'
import AppRouter from './context/AppRouter'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <h1>Role Based Access Control</h1>
      <Navigation />
      <AppRouter />
    </AuthProvider>
  )
}

export default App
