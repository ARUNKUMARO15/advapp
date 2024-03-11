import { useState } from 'react';
import '../assets/adminlogin.css'
import { Link } from 'react-router-dom';
const Adminlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    // Your login logic goes here
  };

  return (
  
    <div className='admin-login'>
        <div className='d1'>
        <h1 className='welcome-message'>Welcome to myboat.com</h1>
      </div>
    <div className="login-form-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
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
        <       Link to="/dashboard"><button type="submit">Login</button></Link>
        <p className='login-p'>Dont have an account..<Link className='link1' to="/adminregister"><a >Register here</a></Link></p>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
    </div>
  );
};

export default Adminlogin;
