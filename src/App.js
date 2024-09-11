// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'; // Ensure this path is correct
import AboutUs from './pages/AboutUs'; // Ensure this path is correct

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />
        
        {/* About Us Route */}
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
