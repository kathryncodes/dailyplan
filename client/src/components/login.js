

const LoginComponent = () => {

    const handleLogin = () => {
        // connect to server 
        // go through auth process
        // direct to /dashboard
    }

    return(
        <div>
            <form action="/login" method="POST">
                <div>
                    <label for="email">Email Address</label>
                    <input type="email" name="email"/>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="text" name="password"/>
                </div>
                <button type="submit" onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}

export default LoginComponent