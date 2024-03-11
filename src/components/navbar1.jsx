import '../assets/navbar1.css'
import { Link } from 'react-router-dom'
import Asidebar from './asidebar'
const Navbar1 = () =>{
    return(
<div className="nav">
    <Asidebar/>
    <h2 className='nav-h2'>myboat.com</h2>
    <ul>
        <Link className='l1' to="/adminlogin"><li>Login/Register</li></Link>
    </ul>
</div>
    )
}
export default Navbar1