import "./style.css";

function paymentform(){
    return (
        <div className='main'>
           <div className="log-in">
                <div className="log-in-container">
                    <form>
                        <div className="head">
                            <h1> Payment Detail Form</h1>
                        </div>
                        <div className="inputt" placeholder='Select Bank Name'>
                            <select className='inpp text-dark'>
                                <option>Meezan Bank</option>
                                <option>Alfalah Bank</option>
                                <option>HBL Bank </option>
                                <option>MCB Bank</option>
                            </select>
                        </div>
                        <div className="inputt">
                            <input className="inpp" type="number" maxLength='11' name="" id="" required placeholder="Credit Card Number" />
                        </div>

                        <div className="inputt">
                            <input className="inpp" type="number" max='30' min='0' name="" id="" required placeholder="Card Code" />
                        </div>
                            <div className="inputt">
                                <input className="inpp" type="number" name="" id="" required placeholder="Expiry Date" />
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

export default paymentform;