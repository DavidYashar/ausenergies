import solarInfo from "../images/solar-info.png";
import "../CSS/solarInfo.css";

import {CiPaperplane} from "react-icons/ci";
const SolarInfo = () => {
    return ( 
        <>
        <div className="solar-panel">
            <div className="image">
            <img src={solarInfo} alt="solar on house" />
            </div>

            <div className="solar-info">
                <h3>Solar Panels for Hosueholds in Victoria</h3>
                <p>Our government rebate program offers cutting-edge 
                    solar panels that present a sustainable solution 
                    for reducing energy consumption. <br /><br />
                     These solar panels
                     harness the power of the sun to generate clean and
                      renewable electricity, reducing your reliance on 
                      conventional energy sources and lowering your utility bills.</p><br />

                   <h5>With improved energy efficiency and the potential to sell
                     excess energy back to the grid, our solar panels empower 
                     homeowners and businesses to make environmentally responsible 
                     choices while enjoying financial advantages.</h5> 

                <div className="advantage">
                     <h4><CiPaperplane/> Save on electricity bill</h4>  
                     <h4><CiPaperplane/> Produce free energy</h4>  
                     <h4><CiPaperplane/> Boost your property value</h4>  

                </div>
                    
                     <div className="buttons">
                        <button>Read more</button>
                        <button><a href="tel:0390 058 179">Call now</a></button>
                     </div>
            </div>
         

        </div>

        </>
     );
}
 
export default SolarInfo;