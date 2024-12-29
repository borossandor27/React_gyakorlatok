import { useState } from 'react'
import './App.css'
import RegistrationForm from './RegistrationForm'

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  }
  )
  return (
    <><h1>Regisztrációs form</h1><div className="App">
      <RegistrationForm formData={formData} setFormData={setFormData} />
    </div></>
  )
}

export default App
