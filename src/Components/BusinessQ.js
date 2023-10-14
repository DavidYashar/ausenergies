

import 'react-slideshow-image/dist/styles.css';
// import { CSSTransition } from "react-transition-group";
import AUS from "../gif/logo.gif";
import "../CSS/BusinessQ.css";

// import  {BiTime} from "react-icons/bi";
// import {BiMoneyWithdraw} from "react-icons/bi";
// import {BsLightbulb} from "react-icons/bs";
import {AiOutlineStock} from "react-icons/ai";
import {FcElectricity} from "react-icons/fc";
import {GiSellCard} from "react-icons/gi";


const slide ={
    
     image: AUS,
     question: "Why your House needs Solar Panel?",
     answer: "Solar Panels not only helps generate FREE electricity, it can increase the value of your property",
     email: "mailto:info@ausenergies.com",
     call: "tel:0390 058 179",
        icon1: <AiOutlineStock/>,
        head1: "increase in value",
        des1: "Solar panels increases the value of your property.",
        icon2:<FcElectricity/>,
        head2: "save in electricity bills",
        des2: "Reduce a lot on your electricity bills.",
        icon3:<GiSellCard/>,
        head3: "sell your extra energy",
        des3: "You can store your extra generated electricity and sell it to the energy provider."



   
};

const BusinessQ = () => {






    return ( 
        <div className="base">
        
        
        <div className={`businessQ`}  >


         <div className="left" >
            
           <div className="one">
            <h3>{slide.icon1}</h3>
           <h4>{slide.head1}</h4>
           <p>{slide.des1}</p>
           </div>

           <div className="two">
           <h3>{slide.icon2}</h3>
           <h4>{slide.head2}</h4>
           <p>{slide.des2}</p>
           </div>

           <div className="three">
           <h3>{slide.icon3}</h3>
           <h4>{slide.head3}</h4>
           <p>{slide.des3}</p>
           </div>
         </div>


        <div className="right ">
            <img src={slide.image} alt={`Slide`} />
            <h4>{slide.question}</h4>
            <p>{slide.answer}</p>
           <a target="__blank" href={slide.email}> <h6>EMAIL US</h6></a>
            <a target="__blank"  href={slide.call}><h6>{slide.call}</h6></a> 
            </div>
        </div>


    
        </div>
     );
}
 
export default BusinessQ;
