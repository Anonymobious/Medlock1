import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginForm.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const LoginForm = () => {
  const [action, setAction] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });

  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const authenticateUser = (username, password) => {
    return username === 'user' && password === 'pass';
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    if (authenticateUser(username, password)) {
      history.push('/medimate');
    } else {
      alert('Authentication Failed');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Add registration logic here
    alert('Registration logic not implemented yet.');
  };

  const toggleAction = () => {
    setAction(action === '' ? 'active' : '');
  };

  return (
    <div className={`Wrapper ${action}`}>
      <div className="form-box login">
        <form onSubmit={handleLogin}>
          <h1>LOGIN</h1>
          <div className="input-box">
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              value={formData.username}
              onChange={handleInputChange}
            />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleInputChange}
            />
            <FaLock className='icon' />
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" /> Remember me</label>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>Don't have an account? <a href="#" onClick={toggleAction}>Register</a></p>
          </div>
        </form>
      </div>

      <div className="form-box register">
        <form onSubmit={handleRegister}>
          <h1>REGISTRATION</h1>
          <div className="input-box">
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              value={formData.username}
              onChange={handleInputChange}
            />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            <FaEnvelope className='icon' />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleInputChange}
            />
            <FaLock className='icon' />
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" /> I agree to the terms & conditions</label>
          </div>
          <button type="submit">Register</button>
          <div className="register-link">
            <p>Already have an account? <a href="#" onClick={toggleAction}>Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
