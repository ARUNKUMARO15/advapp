import Footer from "./footer"
import Navbar from "./navbar"
import '../assets/profile.css'
const Profile=()=>{
    return(
        <div>
            <Navbar/>
            <div className="pro">
                <h1>My Profile</h1>
                <img src={"https://res.cloudinary.com/dcc7xkmex/image/upload/v1708701446/profile_jrzq01.jpg"} 
        alt={Profile} />
        <div>
            <div className="pd">
        <h2>Name:</h2>
        <h3>Gokul</h3>
        </div>
        <div className="pd">
        <h2>Email:gokul@gmail.com</h2>
        {/* <h3>harishm@gmail.com</h3> */}
        </div>
        {/* <div className="pd">
        <h2>Phone:</h2>
        <h3>9988776655</h3>
        </div>
        <div className="pd">
        <h2>Address:</h2>
        <h3>116,abc street,Abc Town,D city,State,Country.</h3>
        </div> */}
        <br></br><br></br><br></br><br></br>
        </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Profile;