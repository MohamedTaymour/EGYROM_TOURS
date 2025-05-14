import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const nameRegex = /^[A-Za-z]+$/;
    const passwordRegex = /[0-9]/;

    if (!nameRegex.test(formData.firstName)) {
      newErrors.firstName = 'First name must contain only letters.';
    }
    if (!nameRegex.test(formData.lastName)) {
      newErrors.lastName = 'Last name must contain only letters.';
    }
    if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must include at least one number.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert('Signup successful!');
      // You can send data to the backend here
      setErrors({});
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="w-full mb-2 px-4 py-2 border rounded"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm mb-2">{errors.firstName}</p>
        )}

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="w-full mb-2 px-4 py-2 border rounded"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm mb-2">{errors.lastName}</p>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-2 px-4 py-2 border rounded"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mb-2">{errors.password}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
