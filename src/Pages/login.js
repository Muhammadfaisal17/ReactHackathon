import "./style.css";
import {  useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { loginUser } from '../store/action';
import { useDispatch } from 'react-redux';

function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    const login = () => {
        let user = {
            email,
            password
        }
        dispatch(loginUser(user, navigate))
            .then((uid) => {
                navigate.push(`/user/${uid}`)
            })
            .catch((err) => {
                alert(err)
            })
    }
    return (
<div className="main">
    <div className="log-in">

    <div className="log-in-container">
        <form>
            <div className="head">
                <h1></h1>
                    
                    <h2>LOGIN</h2>
            </div>
            <div className="inputt">
                <input onChange={(e) => setEmail(e.target.value)} value={email} className="inpp" type="text" name="" id="" required placeholder="Enter your Username" />
            </div>
            <div className="inputt">

                <input onChange={(e) => setPassword(e.target.value)} value={password} className="inpp" type="password" name="" id="" required placeholder="Enter Your Password" />
                <p><a href="#">forget password?</a></p>
            </div>

            <div className="btnn">
                <button>Log In</button>
                <hr className="hr" />
                <p>Don't have an Account?</p>
                <a href="signup">
                Click here to create new Account
                </a>
            </div>

        </form>
    </div>
    </div>

</div>
    )
}

export default Login;