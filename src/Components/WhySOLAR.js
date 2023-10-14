import "../CSS/WhyLED.css";
import Solar from "../images/solar-family.jpg";
import SOLARVideo from "../videos/solar energy.mp4";
// import {CSSTransition} from "react-transition-group";
import { useState } from "react";


const WhySOLAR = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    

    const Items = [
        {
            question: "How much do solar panels cost in Melbourne?",
            answer: "The cost of solar panels in Melbourne depends on the size and quality of the system, the available rebates and incentives, and the installation and maintenance fees. According to Solar Market, the average cost of a 6.6kW solar system in Melbourne is around $5,000 to $7,000 before rebates and around $3,000 to $5,000 after rebateshttps://www.solarrun.com.au/solar-panels-melbourne/. However, the actual cost may vary depending on your specific situation and preferences.",
        
        },
        {
            question: " How much can I save with solar panels in Melbourne?",
            answer: "The savings from solar panels in Melbourne depend on the amount of electricity that you generate and use, the feed-in tariff that you receive, and the electricity rates that you pay. According to Solar Choice, the average payback period for a 6.6kW solar system in Melbourne is around 3 to 4 years, and the average annual savings are around $1,500 to $2,000https://www.finder.com.au/solar-panel-quotes-melbourne. However, the actual savings may vary depending on your specific situation and preferences.",
        
        },
        {
            question: "How can I choose the best solar panel installer in Melbourne?",
            answer: "To choose the best solar panel installer in Melbourne, you need to do some research and comparison before making a decision."
        },

    ];

    const toggleAnswer = (index) => {
        
        setActiveIndex(index); // Set the active question index
      };
    
    
    
    
    
    return ( 
        <>
        <div className="whyled">
        <h2 className="header">Why Solar Panels?</h2><br />
            <div className="first">
            
            <p>Solar panels can reduce your electricity bills by generating
                 clean and renewable energy from the sun. You can use the electricity 
                 that you produce in your home and export the excess to the grid.
                  You can also get paid for the electricity that you export through
                   the feed-in tariff schemehttps. <br /> <br />

                   Solar panels can increase the value of your property by making it 
                   more attractive and energy-efficient. According to some studies, 
                   solar panels can increase the value of a property in Melbourne by up to 4%.
                   This means that you can get a higher return on your investment
                    if you decide to sell your property in the future.</p>

                <video autoPlay loop muted src={SOLARVideo} type="video/mp4" />
        
       
                            
                </div>

                <div className="freq">
                <img src={Solar} alt="led light bulb" />
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
 
export default WhySOLAR;