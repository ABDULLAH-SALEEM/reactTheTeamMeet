import './SignupForm.css'
import { Link } from 'react-router-dom';
const SignupForm = () => {
    return (
        <div>
            <form>
                <div className="parentInput">
                    <div className="textEmail" >
                        <input type="text" placeholder="Enter Full Name" />
                        <input type="email" placeholder="Give Your Email" />
                    </div>
                    <div className="password">
                        <input type="password" placeholder="Enter Password" />
                        <input type="password" placeholder="Confirm Password" />
                    </div>
                </div> <br />
                <Link to="/" >
                     <button className="signupButt" type="submit">Create Account</button>
                </Link>
            </form>
        </div>
    )
}
export default SignupForm;