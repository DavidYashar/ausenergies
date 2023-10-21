import Logo from '../images/logo.png';
import '../CSS/HamNav.css';

import { Link } from 'react-router-dom';
import { useState } from 'react';
const HamNav = ({onButtonClick}) => {
    const [navId, setNavId] = useState(0);
    const [isHovered, setIsHovered] = useState(0);
    

    const handleMouseEnter = (id) => {
     setNavId(id)
     setIsHovered(id)
    }
    const handleMouseLeave= () => {
        setNavId(0)
        setIsHovered(0)
    }

    const handleDropDown = ()=> {
      if(navId !==0){
        setIsHovered(isHovered)
      }
    }
    const Services1 =  [
        {
         id: 1,
         names: "Services",
         item1: "LED Panels",
         item2: "LED Battens",
         item3: "Free Shower Heads",
         item4: "Air conditioner",
         item5: "solar Panels"
        }];
    
        const AboutUs1 =  [
            {
                id: 2,
                names: "aboutUs",
                item1: "FAQ",
               
               }];
    
               const Industry1 =  [
                {
                    id: 3,
                    names: "industry",
                    item1: "LED Panels",
                    item2: "LED Battens",
                    item3: "Free Shower Heads"
                   }];



    return (
        <div className="hamnav">
            <img id='logo' src={Logo} alt="logo" />   
               
              
               <Link to={'/'} className='home11'
               
               >HOME</Link>

               <Link to={'/'} className='service11'
               onMouseEnter={() => handleMouseEnter(1)}
               >
                OUR SERVICES
                </Link>

                {navId===1 && Services1.map((item)=>(
                    <div className="service1"
                    onMouseEnter={handleDropDown}
                    onMouseLeave={handleMouseLeave}
                    key={item.id}

                    // style={{opacity: '0',
                    //  maxHeight: '0',
                    //   transition: 'opacity 500ms ease-in-out, max-height 500ms ease-in-out',
                    //  }}  
                    >
                       
                        <p><Link to={'/LED-Panels'}>{item.item1}</Link></p>
                        <p>{item.item2}</p>
                        <p>{item.item3}</p>
                        <p>{item.item4}</p>
                        <p><Link to={'/solar'}>{item.item5} </Link> </p>
                    </div>
                ))}

               <Link to={'/'} className='about11'
               onMouseEnter={()=>handleMouseEnter(2)}
               >ABOUT US</Link>
               {isHovered ===2 && AboutUs1.map((item)=> (
                <div className="about1"
                onMouseEnter={handleDropDown}
                onMouseLeave={handleMouseLeave}
                key={item.id}
                >
                 <p><Link className='Abou' to={"/faq"}>{item.item1}</Link></p>
                </div>
               ))}

               <Link to={'/'} className='contact11'
               >CONTACT US</Link>


               <Link to={'/'} className='indus11'
               onMouseEnter={()=> handleMouseEnter(3)}
               >INDUSTRY</Link>
               {isHovered ===3 && Industry1.map((item)=> (
                <div className="indus1"
                onMouseEnter={handleDropDown}
                onMouseLeave={handleMouseLeave}
                key={item.id}
                >
                    <p><Link to={'/LED-Panels'}>{item.item1}</Link></p>
                    <p>{item.item2}</p>
                    <p>{item.item3}</p>
                    
                </div>
               ))}

               

               
   
               <button
               
               className='book'
               onClick={onButtonClick}
               >
                
                BOOK APPOINTMENT
               </button>
        </div>
    ) 
}
 
export default HamNav;
   
