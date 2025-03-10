import { useState } from 'react'
import { Routes, Route, NavLink } from "react-router-dom";
import './style.css';
import Home from './Home.jsx';
import NotFound from './NotFound.jsx';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} /> {/* 404 Page */}
      </Routes>
    </>
  )
}

export default App
