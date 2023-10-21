import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from  "./Components/NavBar";
import Footer from'./Components/Footer';
// import Main from "./Components/Main";
// import SolarInfo from './Components/SolarInfo';
// import ServiceShow from './Components/ServicesShow';
// import WhyLED from './Components/WhyLED';
// import WhySOLAR from './Components/WhySOLAR';
// import BusinessQ from './Components/BusinessQ';
// import Install from './Components/Install';
import FAQ from "./Pages/FAQ";
import MainPage from "./Pages/MainPage";
import WhyUs from "./Pages/WhyUs";
import SolarPanel from './Pages/services/SolarPanel';
import LEDPanels from './Pages/services/LEDPanels';
import Form from './Components/Form';
import { useEffect, useState } from "react";
import FormS from './Components/FormS';
function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [smaller, setSmaller] = useState(false)
  const openPop = ()=> {
    setIsOpen(!isOpen)
  }

  useEffect(()=> {
    if(window.innerWidth<=1200 && isOpen){
      setSmaller(true)
    }else{
      setSmaller(false)
    }

    
  }, [isOpen, smaller])
  
  const style =  {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space between',
    top: '60%',
    left: '50%',
    maxWidth: '100%',
    maxHeight: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding:' 20px',
    zIndex: '9999',
    transition: 'all 0.3s ease',
    borderRadius: '20px',
    boxShadow: '0 0 0 9999px black',
    opacity: '1',
 
   }

   const minStyle = {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space between',
    top: '50%',
    left: '50%',
    maxWidth: '100%',
    maxHeight: '100%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding:' 20px',
    zIndex: '9999',
    transition: 'all 0.3s ease',
    borderRadius: '20px',
    boxShadow: '0 0 0 9999px black',
    opacity: '1',
   }
   
  //  const displayed = isOpen? `${open}`: `${closed}`;
  return (
    <div className={`App  ` }>
     <Router>
     <NavBar onButtonClick={openPop}/>
     {isOpen &&<Form  style={style}  />
      }
 
 {smaller &&<FormS style={minStyle} onButtonClick={openPop}/>
      }

      <Routes>
      <Route exact path={'/'}  render={()=> <MainPage isOpen={isOpen}/>}  Component={MainPage}/>
      <Route path={'/faq'}  Component={FAQ}/>
      <Route path={'/whyus'} Component={WhyUs}/>
      <Route path={'/solar'} Component={SolarPanel}/>
      <Route path={'/LED-Panels'} Component={LEDPanels}/>
      
      </Routes>
    
     <Footer/>
     </Router>
    </div>
  );
}

export default App;
