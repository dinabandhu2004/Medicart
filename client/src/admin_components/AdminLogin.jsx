import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from '../home_componets/Nav';

const AdminLogin = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:3000/adminlogin', input);
      if (res.status === 200) {
        console.log(res.data.msg);
        localStorage.setItem('token',res.data.token)
        navigate('/adminDashboard');
      } else {
        console.warn(res.data.msg);
      }
    } catch (err) {
      console.error("Login failed:", err.response?.data?.msg || err.message);
    }
  };

  return (
    <>
    <Nav></Nav>
    <div className='container card w-25 mt-5 p-4 shadow'>
      <h2 className='text-center text-success mb-4'>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            value={input.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            value={input.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className='text-center'>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default AdminLogin;
