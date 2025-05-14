import React from 'react';

const LoginModal = ({ onClose }) => {
  return (
    <div className="absolute top-16 right-4 bg-white text-black p-4 shadow-lg rounded w-72 z-50">
      <h2 className="text-lg font-bold mb-2">Login</h2>
      <input type="text" placeholder="Email" className="w-full mb-2 p-2 border" />
      <input type="password" placeholder="Password" className="w-full mb-2 p-2 border" />
      <button className="bg-blue-500 text-white w-full py-2 rounded mb-2">Login</button>
      <button onClick={onClose} className="text-sm text-gray-600 underline w-full">Cancel</button>
    </div>
  );
};

export default LoginModal;
