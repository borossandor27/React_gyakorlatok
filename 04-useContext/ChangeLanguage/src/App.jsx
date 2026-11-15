import { LanguageProvider } from './context/LanguageProvider'
import Header from './hu/layouts/Header'
import Footer from './hu/layouts/Footer'
import AlgoritmusPage from './hu/pages/AlgoritmusPage'
import './App.css'

function App() {

  return (
    <LanguageProvider>
      <Header />
      <main>
        <AlgoritmusPage />
      </main>
      <Footer />
    </LanguageProvider>
  )
}

export default App
