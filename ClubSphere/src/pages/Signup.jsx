import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    rollNo: '',
    enrollmentNo: '',
    firstName: '',
    primaryClub: '',
    password: '',
    confirmPassword: ''
  });

  const clubs = ['PASC', 'DEBSOC', 'IEEE', 'CSI', 'Art Circle', 'Game Dev Utopia', 'Robotics']; 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      // Send POST request to backend
      const response = await axios.post('http://localhost:3000/api/signup', {
        rollNo: formData.rollNo,
        enrollmentNo: formData.enrollmentNo,
        firstName: formData.firstName,
        primaryClub: formData.primaryClub,
        password: formData.password
      });

      console.log('Signup successful:', response.data);
      alert('Registration successful!');
      // Redirect to login or other page
    } catch (error) {
      console.error('Signup error:', error.response?.data?.message || error.message);
      alert(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Roll No.</label>
            <input
              type="text"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg mt-1 bg-gray-700 text-white border-gray-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Enrollment No.</label>
            <input
              type="text"
              name="enrollmentNo"
              value={formData.enrollmentNo}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg mt-1 bg-gray-700 text-white border-gray-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg mt-1 bg-gray-700 text-white border-gray-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Primary Club</label>
            <select
              name="primaryClub"
              value={formData.primaryClub}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg mt-1 bg-gray-700 text-white border-gray-600"
              required
            >
              <option value="">Select a club</option>
              {clubs.map((club, index) => (
                <option key={index} value={club}>{club}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Set Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg mt-1 bg-gray-700 text-white border-gray-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg mt-1 bg-gray-700 text-white border-gray-600"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Already have an account? <a href="/" className="text-blue-400">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;