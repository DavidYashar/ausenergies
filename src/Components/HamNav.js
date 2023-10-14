import Logo from '../images/logo.png';
import '../CSS/HamNav.css'
const HamNav = () => {
    return (
        <div className="hamnav">
            <img id='logo' src={Logo} alt="logo" />   
               
              
               <a href="#Home">Home</a>
               <a href="#Services">NEW</a>
               <a href="#About Us">About us</a>
               <a href="#contact">Contact us</a>
               <a href="#Industry">Industry</a>
   
               <button className='book'>
                book Appointment
               </button>
        </div>
    ) 
}
 
export default HamNav;
   
