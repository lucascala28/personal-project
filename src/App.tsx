import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Projects from './pages/Projects';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name = "Luca Scala"
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
	  <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  )
}

export default App
