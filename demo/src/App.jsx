import { useState } from 'react'
import {Routes, Route } from "react-router";
import About from './pages/About';
import Home from './pages/Home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />

    </Routes>
    
  )
}

export default App
