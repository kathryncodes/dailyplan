//import { useEffect, useState, useRef } from 'react';
// import SignupComponent  from '../components/signup';
// import LoginComponent  from '../components/login'
// import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
//import classNameNamenames from 'classNameNamenames'
import logo from '../images/dailyplan_dark.png'

// classNameNameName={classNameNamenames("btn", "btn-primary")}

const HomePage = () =>{
    
    return(
        <div className="hero min-h-screen text-center">
            <div className="hero-content flex-col">
            <img src={logo} className="mb-3"/>
                <h1 className="text-6xl mb-6 font-bold">Welcome to dailyplan</h1>
                <p className="text-2xl mb-6">a time-blocking productivity app</p>
                <div className="links btn-group flex center items-center justify-center mb-">
                    <Link to="/login" id="loginBtn">
                    <button className="btn-primary btn"> Login </button>
                    </Link>
                    <div className="divider-horizontal"></div>
                    <Link to="/signup" id="signupBtn">
                    <button className="btn-primary btn "> Sign Up </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default HomePage