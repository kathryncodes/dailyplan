import { Link } from 'react-router-dom'



const LoginComponent = () => {


    return(
        <div className="min-h-screen hero text-center" >
            <div className="hero-content flex-col">
            <img src="https://picsum.photos/id/237/500/250" className="mb-3"/>
            <h3 className="mb-6 font-bold text-2xl">Login to your account</h3>
            <form action="/login" method="POST" className="form-control">
                <div className="">
                    <input type="email" name="email" className="input input-bordered mb-4" aria-label="Email" placeholder="Email" />
                </div>
                <div className="">
                    <input type="text" name="password" className="input input-bordered mb-4" aria-label="Password" placeholder='Password'/>
                </div>
               
                <Link to="/dashboard">
                <button className="btn btn-primary mt-2" aria-label='Login Button'>Login</button>
                </Link>
            </form>
            </div>
        </div>
    )
}

export default LoginComponent