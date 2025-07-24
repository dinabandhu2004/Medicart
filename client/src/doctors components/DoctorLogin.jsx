import React, { useState } from 'react';
import './AuthPage.css';
import Nav from '../home_componets/Nav';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const DoctorLogin = ({ switchToRegister }) => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:3000/Doctorslogin', loginData);
      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
        setMessage(res.data.msg || 'Welcome!');
        navigate('/home/DoctorPannel');
      } else {
        setMessage(res.data.msg || 'Login failed.');
      }
    } catch (err) {
      setMessage(err.response?.data?.msg || 'Login error.');
    }
  };

  return (
    <>
    <Nav></Nav>
    <form onSubmit={handleLogin} className="auth-form">
      <h2>Doctor's Login</h2>
      {message && <p className="auth-message">{message}</p>}
      <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleChange} required />
      <button type="submit">Login</button>
      <p className="auth-toggle" onClick={switchToRegister}>Need to register? <Link to ='/Doctorsregistraion'>Click here</Link></p>
    </form>
    </>
  );
};

export default DoctorLogin;
