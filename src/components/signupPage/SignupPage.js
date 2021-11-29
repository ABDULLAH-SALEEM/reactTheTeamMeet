import SignupForm from "./signupForm/SignupForm";
import './SignupPage.css';
const SignupPage=()=>{
    return(
        <div>
            <p className="title">Create Your Account</p>
            <SignupForm />
        </div>
    );
}
export default SignupPage;