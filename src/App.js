import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./pages/main.js"
import Login from "./pages/login.js"
import './App.css'

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/main" element={<Main />}></Route>
      </Routes>
    </Router>  
  )
}

export default App
