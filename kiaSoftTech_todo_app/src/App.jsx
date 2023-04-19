import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './components/ToDo'

function App() {

  const arr = [
    {
      id: 1,
      name: 'V'
    },
    {
      id: 2,
      name: 'N'
    }
  ]

  return (
    <div className="App">
      <div >
        <ToDo />
      </div>
    </div>
  )
}

export default App
