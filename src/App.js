import React from 'react'
import Navbar from './components/Navbar'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default function App() {
  return <>
  <Router>
      <Routes>
        <Route path="/Sandbox/OrderBox" element={<SecondPage />} />
      </Routes>
      <Navbar />
  </Router>

  
  </>
  
}
