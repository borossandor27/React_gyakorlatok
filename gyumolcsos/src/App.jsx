import { BrowserRouter } from 'react-router-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Main from './layout/Main'
import Nav from './layout/NavBar'
import './App.css'

function App() {
 

  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Main />
      <Footer />
      
    </BrowserRouter>
  )
}

export default App
