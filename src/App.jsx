import { useState } from 'react'
import { Routes, Route, NavLink } from "react-router-dom";
import './style.css';
import Home from './Home.jsx';
import NotFound from './NotFound.jsx';
function App() {
  return (
    <>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Welcome!</title>
    </head>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} /> {/* 404 Page */}
      </Routes>
    </div>
    </>
  )
}

export default App
