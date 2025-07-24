import React, { useState } from 'react';
import './AuthPage.css';
import Nav from '../home_componets/Nav';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const DoctorRegister = ({ switchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    qualification: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:3000/Doctorsregistraion', formData);
      if (res.status === 200 || res.status === 201) {
        setMessage(res.data.msg || 'Registration successful! Please login.');
        navigate('/Doctorslogin')
        setFormData({ name: '', qualification: '', email: '', password: '' });
        switchToLogin();
      } else {
        setMessage(res.data.msg || 'Registration failed.');
      }
    } catch (err) {
      setMessage(err.response?.data?.msg || 'Server error.');
    }
  };

  return (
    <>
    <Nav></Nav>
    <form onSubmit={handleRegister} className="auth-form">
      <h2>Doctor's Register</h2>
      {message && <p className="auth-message">{message}</p>}
      <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="qualification" placeholder="Qualification" value={formData.qualification} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
      <button type="submit">Register</button>
      <p className="auth-toggle" onClick={switchToLogin}>Already registered? <Link to='/Doctorslogin'>Login</Link></p>
    </form>
    </>
  );
};

export default DoctorRegister;
