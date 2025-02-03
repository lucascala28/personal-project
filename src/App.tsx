import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name = "Luca Scala"
  return (
    <>
      <h1 style={{ color: "white" }}>{name}</h1>
     <p className="read-the-docs">Euefffff</p>
    </>
  )
}

export default App
