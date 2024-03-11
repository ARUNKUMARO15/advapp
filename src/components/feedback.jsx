import { useState } from 'react';
import Navbar from './navbar';
import '../assets/feedback.css'
import Footer from "./footer"
import { useNavigate  } from 'react-router-dom';
import axios from 'axios';


const FeedbackForm = () => {
  const navigate=useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange=(e)=>{
    setName(e.target.value);
  }
  const handleEmailChange=(e)=>{
    setEmail(e.target.value);
  }
  const handleMessageChange=(e)=>{
    setMessage(e.target.value);
  }

  const handleFeedback = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/feedback/add", {
        name: name,
        email: email,
        message:message,

      
      });
      alert("Feedback Submitted Successfully!");
      console.log("Feedback Submitted Successfully:", response.data);
      // Redirect or show a success message here
      navigate("/homepage");

    } 
    catch (error) {
      console.error("Submission Failed:", error);

    }
  };
  return (
    <div>
        <Navbar/>
    <div className="feedback-form-container">
      <h2>Leave Us Feedback</h2>
      <form onSubmit={handleFeedback}>
        <div className="form-group1">
          <label className='f-l'>Your Name:</label>
          <input type="text" className='f-in' value={name} onChange={(e) => handleNameChange(e)} placeholder='Your name' required />
        </div>
        <div className="form-group">
        <br></br>
          <label className='f-l'>Your Email:</label>
          <input type="email" className='f-in' value={email} onChange={(e) => handleEmailChange(e)} placeholder='Your email' required />
        </div>
        <div className="form-group">
          <br></br>
          <label className='f-l'>FeedBack:</label>
          <textarea className='f-in' value={message} onChange={(e) => handleMessageChange(e)} placeholder='Your feedback here..' required />
        </div>
        <button className='f-b'>Submit</button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default FeedbackForm;
