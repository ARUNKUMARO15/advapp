// import { useNavigate } from 'react-router-dom';
import '../assets/Roles.css';
// import LoginForm from '../components/login';
import { Link } from 'react-router-dom';

function Roles()
{
    
    return(
        <div id="rolebody">
            <Link to="/login">
        <div className="user" >
            <h3 id="userh3" ></h3>   
            <br></br>
        </div>
        </Link>
        <Link to="/admin">
        <div className="admin">
        <h3  id="adminh3"></h3>
        </div>
        </Link>
        <div className="quotes">

        </div>
        </div>
    )
}

export default Roles;