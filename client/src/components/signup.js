//import { useParams } from 'react-router-dom';


const SignupComponent = () => {

    const handleSignup = () => {
         // connect to server 
        // go through auth process
        // direct to /dashboard
    }

    return(
        <div>
            {/* How to line up this route with backend route??? */}
            <form action="/signup" method="POST" className="signupForm" id="signupForm">
                <div>
                    <label for="username">Username</label>
                    <input name="username" id="username" type="text" />
                </div>
                <div>
                    <label for="email"> Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="text" name="password" id="password" />
                </div>
                <div>
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="text" name="confirmPassword" id="confirmPassword" />
                </div>
                <button type="submit" onClick={handleSignup}>Sign Up</button>
            </form>
        </div>
    )
}

export default SignupComponent