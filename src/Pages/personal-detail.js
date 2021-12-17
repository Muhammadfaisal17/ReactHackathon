import { findRenderedDOMComponentWithClass } from "react-dom/cjs/react-dom-test-utils.production.min";
import "./style.css";

function personalform(){
    return (
        <div className='main'>
           <div className="log-in">
                <div className="log-in-container">
                    <form>
                        <div className="head">
                            <h1> Personal Detail Form</h1>
                        </div>
                        <div className="inputt">
                            <input className="inpp" type="text" name="" id="" required placeholder="Enter your Name" />
                        </div>
                        <div className="inputt">
                            <input className="inpp" type="number" name="" id="" required placeholder="Contact Number" />
                        </div>
                        <div className="inputt">
                            <input className="inpp" type="number" name="" id="" required placeholder="No of Person" />
                        </div>
                        <div className="inputt">
                            <input className="inpp" type="number" name="" id="" required placeholder="No Days to Stay" />
                        </div>
                            <div className="inputt">
                                <input className="inpp" type="number" name="" id="" required placeholder="CNIC Number" />
                            </div>
         

                        <div className="btnn">
                            <button>Submit</button>
                            <hr className="hr" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default personalform;