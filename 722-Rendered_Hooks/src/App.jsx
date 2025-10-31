import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import TodoList from './components/TodoList'

function App() {
  console.log("App Rendered")

  return (
    <>
      <Navbar />
      <main className="container">
        <Sidebar />
        <TodoList />
      </main>
    </>
  )
}

export default App
