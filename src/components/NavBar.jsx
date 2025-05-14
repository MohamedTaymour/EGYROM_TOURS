import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginModal from './LoginModal';

export const NavBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  return (
    <nav style={{backgroundColor: 'black', color: 'white'}} className="flex justify-between items-center bg-gray-800 p-4 text-white" >
      <div className="text-xl font-bold">MyApp</div>
      <div className="flex gap-4">
        <button
          onClick={() => setShowLogin(!showLogin)}
          className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded"
        >
          Login
        </button>
        <button
          onClick={() => navigate('/signup')}
          className="bg-green-500 hover:bg-green-700 px-4 py-2 rounded"
        >
          Sign Up
        </button>
      </div>
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </nav>
  );
};

