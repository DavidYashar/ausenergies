import {Slide} from "react-slideshow-image";
import '../CSS/main.css';
import 'react-slideshow-image/dist/styles.css';
import solar from "../images/solar-panel.png";
import Heating from "../images/heating-pump.png";
import LED from "../images/led-light.png";

import solarR from "../images/heating-pump-responsive.png";
import HeatingR from "../images/led-responsive.png";
import LEDR from "../images/responsive-heating-pump.png";
import { useState, useEffect } from "react";

const Main = () => {
  const [isRes, setIsRes] = useState(false)
    const images = [
        solar, Heating, LED
    ]
    const resImage = [
        LEDR, solarR, HeatingR
    ]


    useEffect(()=> {

        const handleResize = ()=> {
            if(window.innerWidth <=900){
              setIsRes(true)
            }else{
                setIsRes(false)
            }
        }
    
        window.addEventListener('resize', handleResize);
    
        return ()=> {
            window.removeEventListener('resize', handleResize);
        }
    })
   

    return ( 
        <>

<Slide>
            <div className="each-slide-effect">
                <div style={{'backgroundImage': isRes? `url(${resImage[0]})`: `url(${images[0]})` }}>
                    <h1>AUS ENERGIES VICTORIA</h1>
                    <p>Solar panel is a advancing technology that is along with the global warming </p>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{'backgroundImage': isRes? `url(${resImage[1]})`: `url(${images[1]})` }}>
                    <h1>AUS ENERGIES VICTORIA</h1>
                    <p>Using heating pumps with efficient electricity consumption </p>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{'backgroundImage': isRes? `url(${resImage[2]})`: `url(${images[2]})` }}>
                    <h1>AUS ENERGIES VICTORIA</h1>
                    <p>Upgrade to LED light and enjoy more energy saving </p>
                </div>
            </div>
        </Slide>



      
        </>
     );
}
 
export default Main;