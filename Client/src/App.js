import './App.css';
import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Egypt from './pages/Egypt';



function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() =>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  } ,[])

  
  return (
    <Router>
      {<NavBar />}
      <Routes>
        <Route path="/gameDemo" element ={<gameDemo />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/egypt" element={<Egypt/> } />
      </Routes>
    </Router>
  );
}

export default App;