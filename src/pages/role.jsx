import '../assets/rolecss.css';
import LoginForm from '../components/login';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Choose()
{
    const nav=useNavigate()
    function findroleclient()
    {
        console.log("Client");
    }
    function findroleadmin()
    {
        console.log("admin");
    }
    function navigateToPageLogin() {
        nav("/lf")
    }
    return(

    <div className="choosediv">
        
            

        <div className="clientdiv">

            <h3 id="userh3">User</h3>
            <br></br>
            <div id="userpic" onClick={findroleclient}>
                
                <img src="https://static.vecteezy.com/system/resources/previews/016/186/330/original/online-travel-ticket-store-through-transportation-and-journey-provider-app-for-booking-in-flat-cartoon-hand-drawn-template-illustration-vector.jpg" height="240" width="280" id="circle_pic" onClick={navigateToPageLogin} ></img>
               
            </div>

        </div>
        
        

        <div className="admindiv" onClick={findroleadmin}>
        <Link to="/lf">
        <h3 id="adminh3">Admin</h3>
        </Link>
        <br></br>

        <div id="adminpic">
            <img src="https://img.freepik.com/free-photo/server-energy-consumption-monitoring_482257-75934.jpg?t=st=1709802324~exp=1709805924~hmac=814071058553c095b32f848cd6ddb7cbc1853f2b44c79b0b6616ddbcc11db6bc&w=1380" height="240px" width="280px" id="circle_pic"></img>
        </div>

        </div>

        
        <div className="quotes">
            <img style={{mixBlendMode:"darken"}} src="https://png.pngtree.com/png-vector/20210729/ourmid/pngtree-motivational-quotes-adventure-is-calling-local-lettering-in-english-png-image_3746537.jpg" height="200px" width="300px"></img>
        </div>


    </div>

    )
}
export default Choose;

