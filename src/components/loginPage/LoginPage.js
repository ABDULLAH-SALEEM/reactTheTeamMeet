import ContWithFb from "./FbLogin/ContWithFb";
import ContWithGoogle from "./GoogleLogin/ContWithGoogle";
import LoginForm from "./LoginForm/LoginForm";
import './LoginPage.css';
import { Link } from "react-router-dom";
const LoginPage = () => {
    return (
        <div className="loginPage" >
            <div>
                <LoginForm />
                <a className="forgotPass" href="#">FORGOT PASSWORD?</a>
            </div>
            <div className="hrParent" >
                <div className="firstHr" ></div>
                OR
                <div className="secondHr" ></div>
            </div>
            <div>
                <ContWithGoogle />
                <ContWithFb />
                <p className="notReg"> NOT REGISTERED? <Link className="createAcc" to="signUp">CREATE ACCOUNT NOW.</Link></p>
            </div>
        </div>
    );
}
export default LoginPage;