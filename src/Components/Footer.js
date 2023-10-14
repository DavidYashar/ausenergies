import '../CSS/Footer.css'
import AUS from "../gif/logo.gif";
const Footer = () => {
    return (
        
        <>
        <div className="footer">

          {/* <div className="contact">
           <h1> this is contact info</h1>
           <h1> this is contact info</h1>
          </div> */}

        <img src={AUS} alt="logo-ausEnergies" />
       
        <div className="links">
            <div className="firstlink">
                <h2>AUS ENERGIES VICTORIA</h2>
            <p>
        We provide a thorough consultation to explain your available options.
         With that information, you can choose the scope of work that’s
          right for your business. We strive to save you both time and
           money by combining experience, approved products and exceptional service.
            All products that are installed are approved under the program.
         </p>
            </div>

            <div className="aaa">
            <div className="secondlink">
                <h2>Quick Links</h2>
                <a href="#Home">Home</a>
                <a href="#Services">Services</a>
                <a href="#About Us">About us</a>
                <a href="#contact">Contact us</a>
                <a href="#Industry">Industry</a>
                <a href="#Industry">FAQ</a>
            </div>

            <div className="thirdlink">
                <h2>Our Services</h2>
                <a href="#Home">In-Home display meter</a>
                <a href="#Services">Hot Water Upgrade</a>
                <a href="#About Us">Solar Panels</a>
                <a href="#contact">LED highbay</a>
                <a href="#Industry">LED battens</a>
                <a href="#Industry">LED downlights</a>
            </div>

            <div className="fourthlink">
                <h2>Get In touch</h2>
                <a href="#About Us">admin@ausenergies.com</a>
                <a href="#contact">0390 058 179</a>
                <a href="#Industry"> Melbourne, VIC, Australia 3000</a>
                <a href="#Industry">Privacy policy</a>
                <a href="#Industry">Privacy policy</a>
            </div>
            </div>

            </div>
            <h5>© 2020 All rights reserved by Aus Energies Victoria Pty LTD k</h5>
        </div>
     
       
        </> 
    
    );
}
 
export default Footer;