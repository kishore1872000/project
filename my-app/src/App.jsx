import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homescreen from './Component/Homescreen/Homescreen'
import Room from './Component/Homescreen/Room/Room';
import Temperature from './Component/Homescreen/Temperature/Temperature';

function App() {


  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/Temperature" element={<Temperature />} />
        <Route path="/Room" element={<Room/>} />
      </Routes>
      </div>
    </Router>
  )
}

export default App
