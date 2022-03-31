import React from "react";
import appLogo from '../../images/ddaycare-logo.png';
import '../../styles/navbar.css'

const NavigationBar = () => {

    return (
        <div className="navbar-holder">
            <div className="navbar-web">
            <ul className="nav-item-container">
                <li> <img src={appLogo} className="app-logo"/> </li>
                <li className="active">Home</li>
                <li>Dogs</li>
                <li>Shop</li>
            </ul>
            </div>
        </div>
        
    )

}


export default NavigationBar;