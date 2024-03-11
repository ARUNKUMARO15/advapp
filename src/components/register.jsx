import { useState } from 'react';
import '../assets/registerform.css';
import { Link,useNavigate  } from 'react-router-dom';
import axios from 'axios';


const RegisterForm = () => {
  const navigate=useNavigate();
  const [name, setName] = useState(''); // Step 1
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role] = useState("User");
  const [error, setError] = useState('');

  const handleNameChange=(e)=>{
    setName(e.target.value);
  }

  const handleEmailChange=(e)=>{
    setEmail(e.target.value);
  }

  const handlePasswordChange=(e)=>{
    setPassword(e.target.value);
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/login/addUser", {
        name: name,
        email: email,
        password:password,
        role:"User",
      });

      if (!email || !password || !confirmPassword || !name) { 
        setError('Please fill in all fields.');
        return;
      }
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
else{
  alert("Registration Successful!");
      console.log("Registration successful:", response.data);
      // Redirect or show a success message here
      navigate("/login");
}
    } 
    catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className='register-page'>
      <div>
        <h1 className='welcome-message'>Dont have an account</h1>
        <h2 className='welcome-message1'>Register here..</h2>
      </div>
      <div className="register-form-container">
        <h2>User Register</h2>
        <form onSubmit={handleRegister}>
          <label className='register-label'>Name</label> {/* Step 2 */}
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            required
            onChange={(e)=>handleNameChange(e)}
          />
          <label className='register-label'>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            required
            onChange={(e)=>handleEmailChange(e)}
          />
          <label className='register-label'>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            required
            onChange={(e)=>handlePasswordChange(e)}
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
          <p className='register-p'>Already have an account..<Link className='r1' to="/login">Login here</Link></p>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
{/* <label className='register-label'>Role</label> {/* Step 2 */}
{/* <input
  type="text"
  placeholder="Enter your role"
  value={role}
  required
  onChange={(e)=>handleRoleChange(e)}
/>  */}