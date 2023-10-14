import "../CSS/ServicesShow.css";
// import {useState} from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import HomeDisplay from "../images/home-display-meter.jpg";
import LEDbattens from "../images/LED-battens.jpg";
import LEDHighbay from "../images/LED-Highbay.jpg";
import LEDPanels from "../images/LED-panels.jpg";
import SolarPanel from "../images/solarpanels.jpg";


const productData = [
    {
        id:1,
        imageSrc: HomeDisplay,
        title: "IN-Home HomeDisplay",
        des: "IHD or Energy Usage Monitor helps you understand and manage your energy use and reduce energy costs.Victorian Energy Upgrades program can help you  , ",
        
    },
    {
        id:2,
        imageSrc: LEDHighbay,
        title: "LED HIGHBAY",
        des: "High-bay lighting is the most common type of lighting used in commercial facilities that have high ceilings and require high foot-candle levels. They are ideally suited  .",
        
    },
    {
        id:3,
        imageSrc: LEDPanels,
        title: "LED PANELS",
        des: "LED panels are highly energy-efficient, consuming up to 80% less power compared to conventional lighting systems. Furthermore, they boast an extended lifespan, ",
        
    },
    {
        id:4,
        imageSrc: LEDbattens,
        title: "LED BATTENS",
        des: "The Led batten light presents itself as an exemplary replacement for the energy-consuming 72w (36w X 2) T8 fluoro lights, showcasing its superior . ",
        
    },
    {
        id:5,
        imageSrc: SolarPanel,
        title: "SOLAR PANEL",
        des: " Solar panels can reduce the electricity bills of the property by generating clean and renewable energy from the sun. This can save the property owner or occupant hundreds .",

        
    },

];


const ServiceShow = ()=> {




const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  
}
    return ( 
        <div className="service-Show">
         
        <Carousel responsive={responsive}>
           {productData.map((item)=> (
            <div className="products">
             <img src={item.imageSrc} alt={item.imageSrc} />
            <h3>{item.title}</h3>
             <p>{item.des}</p>
              </div>
                  ))}
            </Carousel>
  {/* {productData.map((item)=> (
    <div className="products">
   <img src={item.imageSrc} alt={item.imageSrc} />
   <h3>{item.title}</h3>
   <p>{item.des}</p>
   </div>
  ))} */}


        </div>
     );
}
 
export default ServiceShow;