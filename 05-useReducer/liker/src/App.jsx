import { useState } from 'react'
import Table from './components/Table'
import './App.css'

function App() {
  

  return (
    <>
      <h1>Felhasználók kedvelései</h1>
      <p>Implementáld a felhasználók kedveléseinek kezelését a useReducer hook segítségével!</p>
      <Table />
    </>
  )
}

export default App
