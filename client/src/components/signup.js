import { Link } from 'react-router-dom'
import logo from '../images/dailyplan_dark.png'


const SignupComponent = () => {

    const handleSignup = () => {
         // connect to server 
        // go through auth process
        // direct to /dashboard
    }

    return(
        <div className="hero min-h-screen text-center">

            <div className="hero-content flex-col">
            <img src={logo} className="mb-3"/>
            <h3 className="font-bold text-2xl">Create an account</h3>
            {/* How to line up this route with backend route??? */}
            <form action="/signup" method="POST" id="signupForm" className="mb-6 flex flex-col mt-6 items-center content-between space-y-3">

                    <input name="username" id="username" type="text" aria-label="Create Username" placeholder="Create Username" className="input input-bordered"/>

                    <input name="email" id="email" type="email" aria-label="Enter Email Address" placeholder="Email" className="input input-bordered"/>

                    <input name="password" id="password" type="text" aria-label="Create Password" placeholder="Create Password" className="input input-bordered"/>

                    <input name="confirmPassword" id="confirmPassword" type="text" aria-label="Confirm Password" placeholder="Confirm Password" className="input input-bordered" />
               
                <Link to="/dashboard" >
                <button className="btn-primary btn mt-6" type="submit" onClick={handleSignup}>Sign Up</button>
                </Link>
            </form>
            </div>
        </div>
    )
}

export default SignupComponent