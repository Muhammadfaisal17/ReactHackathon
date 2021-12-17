import "./style.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { signupUser } from '../store/action';
import { useDispatch } from 'react-redux'

function Signup(){

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();

    const signup_user = () => {
        let user = {
            username,
            email,
            password
        }
        dispatch(signupUser(user))
    }
    return (
        <div className="main">
        <div className="log-in">

<div className="sign-up-container">
    <form>
        <div className="head">
            <h1> </h1>

        <h2>Create new Account</h2>
        </div>
        <div className="inputt">
            <label for="User">Username
                <input onChange={(e) => setUsername(e.target.value)} value={username} className="sign-up-inpp" type="text" name="" id="User" required placeholder="Enter your Username" />
            </label>
        </div>
        <div className="inputt">
            <label for="pass">Password
                <input onChange={(e) => setPassword(e.target.value)} value={password} className="sign-up-inpp" type="password" name="" id="pass" required placeholder="Enter Your Password" />
            </label> <br/>
            <label for="Confirm-pass">Re-enter your Password
                <input onChange={(e) => setPassword(e.target.value)} value={password} className="sign-up-inpp" type="password" name="" id="Confirm-pass" required placeholder="Confirm Password" />
            </label>
        </div>
        <div className="inputt">
            <label for="email">Email Address
                <input onChange={(e) => setEmail(e.target.value)} value={email} className="sign-up-inpp" type="email" name="" id="email" required placeholder="Enter email address" />
            </label>
        </div>

        <div className="btnn">
            <center>
                <button onClick={signupUser} >Sign Up</button>
            </center>
        </div>

    </form>

</div>
</div>    
        </div>
    )

}

export default Signup;