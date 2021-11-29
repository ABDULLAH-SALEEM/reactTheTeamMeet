import './LoginForm.css'
const LoginForm=()=>{
    return(
        <div>
            <form>
                <input className="email" type="email" placeholder="Enter Your Email" /> <br />
                <input className="password" type="password" placeholder="Enter Your Password" /> <br />
                <button type="submit" className="submitButt" > Sign In </button>
            </form>
        </div>
    );

}
export default LoginForm;