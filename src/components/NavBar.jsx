import React, { useState } from 'react';
import Logo from '../Assets/Tbg_Logo.png';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="shadow-md px-6 py-4 flex justify-between items-center">
        <a href="/">
          <img src={Logo} alt="Logo" className="h-20 w-auto" />
        </a>

        <div className="hidden md:flex font-roboto font-semibold text-2xl space-x-28">
          <a href="/" className="text-gray-700 hover:text-blue-600 transition">Home</a>
          <a href="/egypt" className="text-gray-700 hover:text-blue-600 transition">Egypt</a>
          <a href="/romania" className="text-gray-700 hover:text-blue-600 transition">Romania</a>
          <a href="/destination" className="text-gray-700 hover:text-blue-600 transition">Destination</a>
        </div>

        <button
          onClick={() => setShowLogin(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>
      </nav>

      {/* Login Modal */}
        {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default Navbar;
