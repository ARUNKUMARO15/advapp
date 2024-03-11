import { useState } from 'react';
import '../assets/adminregister.css';
import { Link } from 'react-router-dom';
const Adminregister= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState(''); 
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    
    if (!email || !password || !confirmPassword || !name) { 
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
  };

  return (
    <div className='admin-register'>
      <div>
        <h1 className='welcome-message'>Admin Registration</h1>
        <h2 className='welcome-message1'>Register here..</h2>
      </div>
      <div className="register-form-container">
        <h2>User Register</h2>
        <form onSubmit={handleRegister}>
          <label className='register-label'>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label className='register-label'>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className='register-label'>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className='register-label'>Confirm password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Register</button>
          <p className='register-p'>Already have an account..<Link className='r1' to="/adminlogin"><a >Login here</a></Link></p>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Adminregister;