import fbLogo from '../../Assets/images/fbLogo.png'
import './ContWithFb.css'
const ContWithFb=()=>{
    return (
        <div>
            <button className="fbButton" >
                <img src={fbLogo}/>
                <div className="fbText" >Continue With Facebook</div>
            </button>
        </div>
    );
}

export default ContWithFb;