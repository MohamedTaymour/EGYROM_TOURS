import React from 'react';
import { X } from 'lucide-react'; // Optional: install lucide-react or use a regular ×
import { Link } from 'react-router-dom';

const LoginModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="relative bg-white rounded-lg p-6 w-full max-w-sm shadow-lg">
        
        {/* Close button (X icon) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Centered Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>

          <div className="flex justify-between items-center">
          </div>
        </form>

        {/* Bottom label */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          
          <Link to="/signup" className="text-blue-600 hover:underline font-semibold">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
