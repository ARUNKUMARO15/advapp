import { BrowserRouter as Router,  Routes ,Route} from 'react-router-dom';
import './App.css'
import LoginForm from './components/login';
import RegisterForm from './components/register';
import Homepage from './components/homepage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Jct from "./components/boathouses/jct";
import Adminlogin from './components/adminlogin';
import Adminregister from './components/adminregister';
import Dashboard from './components/admindashboard';
import Contactus from './components/contactus';
import FeedbackForm from './components/feedback';
import Profile from './components/profile';
import Mybooking from './components/mybooking';
// import Choose from './pages/role';
import Roles from './pages/roles';
import AdminBoatsPage from './pages/Adminn';
import Payment from './components/payment';

function App() {
  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div>
<Router>
      <Routes>
        <Route path="/" exact element={<Roles/>}/>
        <Route path="/login" exact element={<LoginForm/>} />
        <Route path="/registerform" exact element={<RegisterForm/>} />
        <Route path="/homepage" exact element={<Homepage/>} />
        <Route path="/jct" exact element={<Jct/>} />
        <Route path="/adminlogin" exact element={<Adminlogin/>} />
        <Route path="/adminregister" exact element={<Adminregister/>} />
        <Route path="/dashboard" exact element={<Dashboard/>} />
        <Route path="/contactus" exact element={<Contactus/>} />
        <Route path="/feedback" exact element={<FeedbackForm/>} />
        <Route path="/profile" exact element={<Profile/>} />
        <Route path="/mybooking" exact element={<Mybooking/>} />
        <Route path="/admin" exact element={<AdminBoatsPage/>}/>
        <Route path="/pay" exact element={<Payment/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
