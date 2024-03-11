import { useState } from 'react';
import '../assets/loginform.css'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login/authenticate', {
        email: email,
        password: password,
      });
      let token = response.data;
      localStorage.setItem('token', token);
  
      navigate('/homepage');
    } catch (error) {
      console.error('Error: ', error);
      alert("User not found. Please check your credentials.");
    }
  };

  return (
    <div className='login-page'>
        <div className='d1'>
        <h1 className='welcome-message'>Online BoatHouse Booking</h1>
        <h2 className='welcome-message1'>Digital Boat Hire</h2>
        </div>
    <div className="login-form-container">
      <h2>User Login</h2>
      <form onSubmit={handleSubmit}>
        <label className='login-label'>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className='login-label'>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p className='login-p'>Dont have an account..<Link className='link1' to="/registerform">Register here</Link></p>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;
