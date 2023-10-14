import Process from "../gif/process.gif";
import "../CSS/Install.css";

const Install = () => {
    return ( 
        <>
        <h1>PROCESS FOR INSTALLATION</h1>
        <div className="install">
        
            <img src={Process} alt="Process" />

            <div className="step">

                <div className="step1">
                <h2>STEP<br />01</h2>
                <div className="info1">
                <h3 id="step1">CONTACT FOR QUOTE</h3>
                <p>contact us for FREE quotation.</p>
                </div>
                </div>

                <div className="step2">
                <h2 >STEP<br />02</h2>
                <div className="info2">
                <h3 id="step2">RETURN EVALUATION</h3>
                <p>we return the result of evaluation
                     based on the received info.</p>
                     </div>
                     </div>


                <div className="step3">
                     <h2>STEP<br />03</h2>
                     <div className="info3">
                <h3 id="step3">PREPARE FOR INSTALLATION</h3>
                <p>we do the pre-instllation and ,
                     and schedule for installation.</p>
                     </div>
                     </div>
            
            </div>
        </div>
        </>
     );
}
 
export default Install;