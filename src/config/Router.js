
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../Pages/login';
import Signup from '../Pages/signup';
import Home from '../Pages/home';
import Admin from '../Pages/admin';
import Personalform from "../Pages/personal-detail"
import Paymentform from "../Pages/payment-form"



function AppRouter() {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/personal" element={<Personalform/>} />
                <Route path="/payment" element={<Paymentform/>} />   
                <Route path="/admin" element={<Admin/>} />            
 </Routes>
        </Router>
 
        )
}

export default AppRouter;

