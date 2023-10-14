// import {FaBars, FaTimes} from "react-icons/fa";
import {useState, useEffect} from 'react';
import Logo from '../images/logo.png'
import {FaLocationDot} from "react-icons/fa6";
import {LiaBusinessTimeSolid} from "react-icons/lia";
import { Link } from 'react-router-dom';

import "../CSS/navbar.css";
import HamNav from './HamNav';
const NavBar = () => {

    const [isNavVisible, setIsVisible] = useState(false)
    const [isVisible, setVisitble] = useState(true)
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);


    
     
    useEffect(()=> {

        let ticking = false;
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollPos = window.scrollY;
          setIsNavbarVisible(currentScrollPos < prevScrollPos || currentScrollPos === 0);
          prevScrollPos = currentScrollPos;
          ticking = false;
        });

        ticking = true;
      }
    }
        

        const handleResize = ()=> {
            if(window.innerWidth <= 900){
                setIsVisible(true);
                setVisitble(false)
            }else{
                setIsVisible(false)
                setVisitble(true)
            }
        }
        
   
     
        window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize)
    handleResize()

    return ()=> {
        window.removeEventListener('resize', handleResize)
        window.removeEventListener('scroll', handleScroll);
       
    }


}, [])



    return ( 
<>
<div className="address">

    <div className='hours'>
        <p>business hours:</p>
        <h5><FaLocationDot/> Mon-Fri : 9:00 AM - 5:00 PM</h5>
    </div>
     
      <div className="location">
      <p>location:</p>
        <h5><LiaBusinessTimeSolid/> Casey Dr, Hoppers Crossing VIC 3029, Australia</h5>
      </div>

    </div>
    <hr />

{isVisible &&
        <div className={`navbar ${isNavbarVisible ? 'visible' : ''} `}  >
            
           
           <img id='logo' src={Logo} alt="logo" />   
               
              
           <Link to={"/"}><h6>Home</h6></Link>
           <h6 >Services</h6> 
           <Link to={"/faq"}><h6>About us</h6></Link>
            <h6 >Contact us</h6>
            <h6 >Industry</h6>

            <button className='book'>
             book Appointment
            </button>
            </div>          
}
        
         {isNavVisible && <HamNav/>}
             
        
        </>
    );
}
 
export default NavBar;