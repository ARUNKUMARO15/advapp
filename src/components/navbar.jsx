import '../assets/navbar.css'
import { Link } from 'react-router-dom'
import AnimatedSidenav from './sidebar'
const Navbar = () =>{
    return(
<div className="nav">
    <AnimatedSidenav/>
    <h2 className='nav-h2'> Arun Boat</h2>
    <ul>
        <Link className='aknavbar' to="/"><li id ="colorid">LogOut</li></Link>
        <Link className="aknavbar" to="/feedback"><li id ="colorid">Feedback</li></Link>
    </ul>
    
    
</div>
    )
}
export default Navbar