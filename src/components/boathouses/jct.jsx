import { useState } from 'react'
import Navbar from '../navbar'
import '../../assets/jct.css'
import { useNavigate  } from 'react-router-dom';
import axios from 'axios';
import Footer from '../footer';

const Jct=()=> {
  const navigate=useNavigate();
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [numGuests, setNumGuests] = useState('')
  const [address, setAddress] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)


  const handleFullNameChange=(e)=>{
    setFullName(e.target.value);
  }
  const handleEmailChange=(e)=>{
    setEmail(e.target.value);
  }
  const handlePhoneChange=(e)=>{
    setPhone(e.target.value);
  }
  const handleStartDateChange=(e)=>{
    setStartDate(e.target.value);
  }
  const handleEndDateChange=(e)=>{
    setEndDate(e.target.value);
  }
  const handleNumGuestsChange=(e)=>{
    setNumGuests(e.target.value);
  }

  const handleAddressChange=(e)=>{
    setAddress(e.target.value);
  }

  const handleStateChange=(e)=>{
    setState(e.target.value);
  }
  const handleCountryChange=(e)=>{
    setCountry(e.target.value);
  }
 
  const handleBooking = async (event) => {
    event.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
  
    try {
      const response = await axios.post(
        "http://localhost:8080/api/booking/add",
        {
          fullName: fullName,
          email: email,
          phone: phone,
          startDate: startDate,
          endDate: endDate,
          numGuests: numGuests,
          address: address,
          state: state,
          country: country,
        },
        config
      );
  
      alert("Proceed to Payment?");
      console.log("Booking successful:", response.data);
      // Redirect or show a success message here
  
      const amountx = 7500;
      var options = {
        key: "rzp_test_gs53Ffayhc0t6X",
        key_secret: "QqLcxJhbf5IjkKpnAfQIrjvd",
        amount: amountx * 100,
        currency: "INR",
        name: "myboat.com",
        description: "for testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "DEEPAK",
          // email: "deepakprabu1234@gmail.com",
          // contact: "8754988838",
        },
        notes: {
          address: "Sri krishna college of Engineering and Technology",
        },
        theme: {
          color: "#3399cc",
        },
      };
  
      var pay = new window.Razorpay(options);
      pay.open();
    } catch (error) {
      console.error("Booking failed:", error);
    }
  };
  

  return (
    <div>
      <Navbar />
<h1 className='j-h1'>Look out the Facilities of KJM BoatHouse</h1>
{/* <div className='r-p'>
<p>JCT Houseboats is 5.8 km from Alleppey Railway Station. Mararikulam Fishing Village is 17.5 km away while Kochi Airport is 61 km from the houseboat.</p>
    <p>Providing unique accommodation on water, JCT Houseboats is a wooden boat offering overwater rooms. It has a common kitchen and sun deck. A restaurant is available.</p>  
      <p>Wooden-walled rooms each have an en suite bathroom with free toiletries and shower facilities. Air conditioning and a TV is provided.</p>
      </div> */}
      {/* <div className='content-b1'>

      <img  className='img1' src="https://res.cloudinary.com/dcc7xkmex/image/upload/v1709313088/7_nuffui.jpg" alt="r1" />
      <img  className="img2" src="https://res.cloudinary.com/dcc7xkmex/image/upload/v1709313085/8_pkm6cx.jpg" alt="r2" />
      <div className='room'>
      <h2>Room Service</h2>
      <p>Non-Smoking Rooms, Family Rooms.</p>
      <p>Daily Housekeeping.</p>
      <p>	Toilet, Shower, Private Bathroom, Additional Toilet.</p>
     </div>
      </div> */}
<br/><br/>

      {/* <div className='content-b2'>
      <div className='room1'>
<h2>Room Amenities</h2>
<p>Carpeted</p>
<p> Extra Long Beds greater than 2m.</p>
<p>	Clothes Rack</p>
<p> Desk, Air Conditioning, Fan</p>
</div>
<img data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" className="img3" src="https://res.cloudinary.com/dcc7xkmex/image/upload/v1709211651/3_k3fgqi.jpg" alt="r1" />
<img data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" className="img4" src="https://res.cloudinary.com/dcc7xkmex/image/upload/v1709211650/1_nierdm.jpg" alt="r2" />
</div> */}
<hr/>
<br/>


<div className='others'>

<div className='block-1'>
{/* <div className='others-c'> */}
{/* <div className='ff'>
<h2>Food Facilities</h2>
<p>Complimentary Breakfast In The Executive Lounge</p>
<p>Complimentary Afternoon Snacks And Drinks In The Executive Lounge</p>
<p>Complimentary Snacks And Drinks In The Executive Lounge Entire Day.</p>
<p>Restaurant, Kid Meals</p>
</div> */}
{/* <div  className='os'>
<h2>Other Services</h2>
<p>Luggage Storage</p>
<p>Currency Exchange</p>
<h2>Outdoor & view</h2>
<p>Balcony, View, Terrace</p>
</div> */}
{/* </div> */}

{/* <div className='others-img'>
<img  className="img11" src="https://res.cloudinary.com/dcc7xkmex/image/upload/v1709211668/6_ugjf03.jpg" alt="r1" />
<img  className="img22" src="https://res.cloudinary.com/dcc7xkmex/image/upload/v1709211649/2_iauflr.jpg" alt="r1" />
</div> */}
<div className='loc'>
  {/* <h2>Location Details</h2> */}
  <div className='map-d'>
    {/* <div>
  <iframe
  className='map'
  title="Kerala JCT Boathouse Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.400642806034!2d76.34099491480034!3d9.476926793693582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08029c03ab97e9%3A0xc2734d4d5a845f85!2sKerala%20JCT%20Boathouse!5e0!3m2!1sen!2sin!4v1645440661429!5m2!1sen!2sin"
  width="300"
  height="270"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
/></div> */}
<div>
  {/* <p>kjsdjf</p> */}
</div>
</div>
</div>
</div>

<div className='block-2'>
<div className="booking-form" >
        {/* <h2 className='bf1'>Book Now</h2> */}
        <form onSubmit={handleBooking} className='form'>
            <h2 >Booking Form</h2>
            <br/>
              <label htmlFor="firstName" className="form-label">
                Full Name:
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e)=>handleFullNameChange(e)}
                className="form-input"
                required
              />
             

              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => handleEmailChange(e)}
                className="form-input"
                required
              />
              <label htmlFor="phone" className="form-label">
                Phone:
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => handlePhoneChange(e)}
                className="form-input"
                required
              />
              <label htmlFor="startDate" className="form-label">
                Start Date:
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => handleStartDateChange(e)}
                className="form-input"
                required
              />
              <label htmlFor="endDate" className="form-label">
                End Date:
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => handleEndDateChange(e)}
                className="form-input"
                required
              />
  <label  className="form-label">
    Number of Guests:
  </label>
  <input
    type="number"
    value={numGuests}
    onChange={(e) => handleNumGuestsChange(e)}
    className="form-input"
    required
  />
  

              <label className='form-label'>
                Address:
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => handleAddressChange(e)}
                className="form-input"
                required
              />
            
              <label className="form-label">
                State:
              </label>
              <input
                type="text"
                value={state}
                onChange={(e) => handleStateChange(e)}
                className="form-input"
                required
              />
              <label className="form-label">
                County:
              </label>
              <input
                type="text"
                value={country}
                onChange={(e) => handleCountryChange(e)}
                className="form-input"
                required
              />
          
                <div className='c-t'>
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                className="f-checkbox"
                required
              />
              <label className="f-term">
                I accept the terms and conditions.
              </label>
            
            <button className="button1">
              Submit
            </button>
            </div>
        </form>
      </div>
</div>
</div>


      <Footer/>
    </div>
  )
}

export default Jct