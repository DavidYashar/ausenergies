import "../CSS/WhyLED.css";
import led from "../images/led-light-bulb2.jpg";
import LEDVideo from "../videos/d-short.mp4";
// import {CSSTransition} from "react-transition-group";
import { useState } from "react";

const WhyLED = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    

    const Items = [
        {
            question: "What is the difference between LEDs and traditional light bulbs?",
            answer: "The incandescents that LED bulbs are generally replacing these days give off 90% of their energy as heat, rather than light. These bulbs work because of a filament that heats up enough to glow, giving off light. These filaments are very delicate and eventually break or burn out. Even being turned on and off damages normal bulbs, but not LEDs. LED bulbs have no filament and work in a completely different way, meaning they don’t reach such high temperatures.",
        
        },
        {
            question: "Are LEDs worth the extra money?",
            answer: "LEDs are more expensive than traditional bulbs, and they won’t last forever – but they will last 20-25 times longer than a typical halogen, and 8-10 times longer than a typical CFL! Some will work for more than 10 years. It’s worth buying good quality ones too – buying super cheap LEDs is a false economy. You should notice a real drop in your energy bills when you switch to LEDs, and you’ll know that you’re reducing your carbon footprint at the same time! You will soon have no choice but to swap to LEDs. You can now get them in pretty much any shape or size you would like!",
        
        },
        {
            question: "Why do LEDs eventually burn out?",
            answer: "Instead of burning out suddenly like traditional bulbs, LEDs get gradually dimmer, as the individual light emitting diodes that make up the bulb fail one by one. LEDs are far more efficient than older types of light bulb. However, they are still not 100% efficient in turning electrons into light; some of the power still comes out as heat. This waste heat collects in the neck of the bulb above the socket. Because this is such a small space, the heat builds to a pretty high temperature and raises the temperature of the air trapped inside the bulb.",
        
        },

    ];

    const toggleAnswer = (index) => {
        
        setActiveIndex(index); // Set the active question index
      };
    
    
    
    
    
    return ( 
        <>
        <div className="whyled">
        <h2 className="header">Why LED light Bulbs?</h2><br />
            <div className="first">
            
            <p>LED light bulbs are a highly efficient, energy saving 
                alternative to incandescent light bulbs. 
                Their technology is completely different, 
                and as a result they last far longer than older 
                types of light bulb. All light bulbs eventually 
                break due to prolonged heat exposure, and LEDs are 
                no different in this respect. However, the exact 
                way in which they fail is different – and so is
                 the length of time they last for. <br /> <br />

                So LEDs won’t suddenly break and stop emitting light – 
                they will eventually just not be bright enough to be 
                useful any more. You can choose to replace them once 
                they have dipped to a level that is no longer enough for your needs.</p>

                <video autoPlay loop muted src={LEDVideo} type="video/mp4" />
        
       
                            
                </div>

                <div className="freq">
                <img src={led} alt="led light bulb" />
                   <div className="question">
                   {Items.map((item, index) => (
        <div key={index}>
          <h3 onClick={() => toggleAnswer(index)} className={index === activeIndex ? 'active' : ''}>
            {item.question}
          </h3>
         
          <p className={`answer ${index === activeIndex? 'answer-visible': ''}`}>{item.answer}</p>
        </div>
      ))}
                    </div>
                </div>
        </div>
        </>
     );
}
 
export default WhyLED;