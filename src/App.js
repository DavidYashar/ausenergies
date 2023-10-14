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
function App() {
  return (
    <div className="App">
     <Router>
     <NavBar/>
      <Routes>
      <Route exact path={'/'} Component={MainPage}/>
      <Route path={'/faq'} Component={FAQ}/>
        
      </Routes>
    
     <Footer/>
     </Router>
    </div>
  );
}

export default App;
