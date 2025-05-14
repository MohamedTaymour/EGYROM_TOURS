import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Egypt from './pages/Egypt';



function App() {
  return (
    <Router>
      {<NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/egypt" element={<Egypt/> } />
      </Routes>
    </Router>
  );
}

export default App;