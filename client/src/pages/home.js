//import { useEffect, useState, useRef } from 'react';
import SignupComponent  from '../components/signup';
import LoginComponent  from '../components/login'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

const HomePage = () =>{

    return(
        <div>
            <div className="layout">
                <h1>Welcome to dailyplan</h1>
                <p>a time-blocking productivity app</p>
                <div className="links">
                    <Link to="/login" className="loginBtn btn">Login</Link>
                    <Link to="/signup" className="signupBtn btn">Signup</Link>
                </div>
            </div>
            {/* Login button with route to login component*/}
            {/* Signup button with route to signup component*/}

            <Routes>
                <Route path="/signup" element={ <SignupComponent />} />
                <Route path="/login" element={ <LoginComponent />} />
            </Routes>

        </div>
    )
}

export default HomePage