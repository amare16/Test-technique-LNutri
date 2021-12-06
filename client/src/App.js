import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Cartridges from './components/cartridges/Cartridges';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cartridges />} />
      </Routes>
    </Router>
  );
}

export default App;
