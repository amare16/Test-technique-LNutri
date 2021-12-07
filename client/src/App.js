import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Cartridges from './components/cartridges/cartridges/Cartridges';
import Home from './components/home/Home';
import NavBar from './partials/navbar/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartridges" element={<Cartridges />} />
      </Routes>
    </Router>
  );
}

export default App;
