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
    const [isHovered, setIsHovered] = useState(null);



    const handleMouseEnter = (id)=> {
      setIsHovered(id)
    }

    const handleMouseleave = ()=> {
      setIsHovered(null)
    }


    const handleDropDownEnter = ()=> {
      if(isHovered != null){
        setIsHovered(isHovered)
      }
    }
     
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


// const onMouseEnter = ()=> {
//     setIsHovered(true)
//   }
  
//   const onMouseLeave = ()=> {
//     setIsHovered(false)
//   }

  const Services =  [
    {
     id: 1,
     names: "Services",
     item1: "LED Panels",
     item2: "LED Battens",
     item3: "Free Shower Heads",
     item4: "Air conditioner",
     item5: "solar Panels"
    }];

    const AboutUs =  [
        {
            id: 2,
            names: "aboutUs",
            item1: "FAQ",
           
           }];

           const Industry =  [
            {
                id: 3,
                names: "industry",
                item1: "LED Panels",
                item2: "LED Battens",
                item3: "Free Shower Heads"
               }];
   
  



    return ( 
<>
<div className="address">

    <div className='hours'>
        <p>business hours:</p>
        <h5><FaLocationDot/> Mon-Fri : 9:00 AM - 5:00 PM</h5>
    </div>
     
      <div
       className="location"
   
      >
      <p>location:</p>
        <h5><LiaBusinessTimeSolid/> Casey Dr, Hoppers Crossing VIC 3029, Australia</h5>
      </div>

    </div>
    <hr />

{isVisible &&
        <div className={`navbar ${isNavbarVisible ? 'visible' : ''} `}  >
            
           
           <img id='logo' src={Logo} alt="logo" />   
               
              
           <Link to={"/"}><h6 >Home</h6></Link>
          


           <h6 
            onMouseEnter={()=> handleMouseEnter(1)}
            
        className="serv"
           >Services</h6> 
          {isHovered ===1 && Services.map((item) =>
           ( <div style={{opacity: '1', transition: 'opacity 1s ease-in-out',
            maxHeight: '200px' }}
           onMouseEnter={handleDropDownEnter}
           onMouseLeave={handleMouseleave}
           key={item.id} className= "Services">
            <div className="flex1">
            <p ><Link to={'/LED-Panels'}>{item.item1}</Link></p>
             <p >{item.item2}</p>
            <p >{item.item3}</p>
            </div>
            <div className="flex2">
            <p >{item.item4}</p>
            <p ><Link to={'/solar'}>{item.item5} </Link> </p>
            </div>
                       
                       
                     </div>

         ))}

           <Link className='Abou' to={"/faq"}><h6 className='Abou'
            onMouseEnter={()=> handleMouseEnter(2)}
           >About us</h6></Link>
            {isHovered ===2 && AboutUs.map((item) => ( <div
            style={{opacity: '1', transition: 'opacity 1s ease-in-out',
            maxHeight: '200px' }}
            onMouseEnter={handleDropDownEnter}
           onMouseLeave={handleMouseleave}
            key={item.id} className="aboutUs">
                       <p ><Link className='Abou' to={"/faq"}>{item.item1}</Link></p>
                       {/* <p >{item.item2}</p>
                       <p >{item.item3}</p> */}
                     </div>

         ))}

            <h6 
               
      
            >Contact us</h6>


            <h6 className='Indu'
            onMouseEnter={()=> handleMouseEnter(3)}
            >Industrial</h6>
             {isHovered ===3 && Industry.map((item) => ( <div
             onMouseEnter={handleDropDownEnter}
             onMouseLeave={handleMouseleave}
             style={{opacity: '1', transition: 'opacity 1s ease-in-out',
            maxHeight: '200px' }}
             key={item.id} className="industry" >
                       <p ><Link to={'/LED-Panels'}>{item.item1}</Link></p>
                       <p >{item.item2}</p>
                       <p >{item.item3}</p>
                     </div>

         ))}


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
