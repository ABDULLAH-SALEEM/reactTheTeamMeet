import googleLogo from '../../Assets/images/gLogo.png'
import './ContWithGoogle.css';
const ContWithGoogle=()=>{
    return (
        <div>
            {/* <div className="hrParent" >
                <div className="firstHr" ></div>
                OR
                <div className="secondHr" ></div>
            </div> <br /> */}
            <button className="gButton" >
                <img src={googleLogo} width="65" height="65" />
                <div>Continue With Google</div>
            </button>
        </div>
    );
}

export default ContWithGoogle;