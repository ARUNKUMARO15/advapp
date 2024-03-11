import React from 'react';
import '../assets/asidebar.css'
import { Link } from 'react-router-dom';
class Asidebar extends React.Component {
  openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  }

  render() {
    return (
      <div>
        <div id="mySidenav" className="sidenav1">
          <a href="javascript:void(0)" className="closebtn1" onClick={this.closeNav}>&times;</a>
          <Link to ="/aprofile"><a >Profile</a></Link>
          <Link to ="/dashboard"><a >Dashboard</a></Link>
          <Link to="/adminlogin"><a>Logout</a></Link>
        </div>
        <span style={{fontSize: '30px', cursor: 'pointer'}} className='openbtn1' onClick={this.openNav}>&#9776;</span>
      </div>
    );
  }
}

export default Asidebar;
