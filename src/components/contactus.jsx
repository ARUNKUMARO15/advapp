import Navbar from "./navbar"
import '../assets/contactus.css'
import { Link } from "react-router-dom"
import Footer from "./footer"
const Contactus=()=>{
    return(
     <div>
        <Navbar/>
        <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p className="cc">Our commitment to customer satisfaction is reflected in our prompt response times and personalized assistance, ensuring that every users needs are met efficiently. Whether its a question about booking availability, technical support, or general inquiries, our dedicated team is readily available to provide assistance and ensure a smooth sailing experience for all our users.</p>
      <div className="contact-section">
        <h2>Customer Support</h2>
        <p>Email: <a href="mailto:support@yourboathouseapp.com">support@yourboathouseapp.com</a></p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Operating Hours: Monday to Friday, 9:00 AM to 6:00 PM (EST)</p>
      </div>
      <div className="contact-section">
        <h2>Sales & Partnership Inquiries</h2>
        <p>Email: <a href="mailto:sales@yourboathouseapp.com">sales@yourboathouseapp.com</a></p>
        <p>Phone: +1 (555) 987-6543</p>
        <p>Operating Hours: Monday to Friday, 9:00 AM to 6:00 PM (EST)</p>
      </div>
      <div className="contact-section">
        <h2>Technical Support</h2>
        <p>Email: <a href="mailto:techsupport@yourboathouseapp.com">techsupport@yourboathouseapp.com</a></p>
        <p>Operating Hours: 24/7</p>
      </div>
      <div className="contact-section">
        <h2>Mailing Address</h2>
        <p>Your Boathouse App</p>
        <p>123 Boathouse Lane</p>
        <p>Marina City, State, ZIP</p>
        <p>United States</p>
      </div>
      <div className="contact-section">
        <h2>Social Media</h2>
        <p>Connect with us on social media:</p>
        <p><a href="https://www.facebook.com/yourboathouseapp">Facebook</a></p>
        <p><a href="https://twitter.com/yourboathouseapp">Twitter</a></p>
        <p><a href="https://www.instagram.com/yourboathouseapp">Instagram</a></p>
      </div>
      <div className="contact-section">
        <h2>Feedback</h2>
        <p>We value your feedback! Please take a moment to fill out our <Link to ="/feedback"><a >feedback form</a></Link>  to help us improve our services.</p>
      </div>
    </div>
    <Footer/>
     </div>
    )
}
export default Contactus