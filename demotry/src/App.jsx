import {Routes, Route } from "react-router";

import About from './componets/About'
import Home from './componets/Home'

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />

    </Routes>
    </>
  )
}

export default App
