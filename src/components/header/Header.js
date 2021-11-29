import React from "react";
import './Header.css';
import logo from '../Assets/images/siteLogo.png'
const Header=()=>{
    return(
        <div className="header" >
            <div className="siteTitle" >THE TEAM MEET</div>
            <div className="tagLine" >Safe Time By Attending Short Meetings Here.</div>
            <img src={logo} alt="siteLogo" width="150" height="143" />

        </div>
    );

}

export default Header;