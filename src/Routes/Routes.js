import { Routes as AppRoutes , Route } from "react-router-dom";
import LoginPage from "../components/loginPage/LoginPage";
import SignupPage from "../components/signupPage/SignupPage";
const Routes=()=>{
    return(
        <AppRoutes>
               <Route path="/" element={<LoginPage />} />
               <Route path="/signUp" element={<SignupPage/>} />
        </AppRoutes>
    )
}
export default Routes;