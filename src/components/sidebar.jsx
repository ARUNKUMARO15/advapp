import React from 'react';
import '../assets/sidebar.css'
import { Link } from 'react-router-dom';
class AnimatedSidenav extends React.Component {
  openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  }

  render() {
    return (
      <div>
        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
          <Link to ="/profile"><a >Profile</a></Link>
          <Link to ="/homepage"><a >Home</a></Link>
          {/* <Link to ="/mybooking"><a >My Bookings</a></Link> */}
          <Link to ="/contactus"><a >Contact Us</a></Link>
          <Link to ="/feedback"><a >Feedback</a></Link>
          <Link to="/"><a>Logout</a></Link>
        </div>
        <span style={{fontSize: '30px', cursor: 'pointer'}} className='openbtn' onClick={this.openNav}>&#9776;</span>
      </div>
    );
  }
}

export default AnimatedSidenav;
