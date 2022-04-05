import React, { useEffect, useRef, useState } from "react";
import appLogo from '../../images/ddaycare-logo.png';
import '../../styles/navbar.css'

const NavigationBar = () => {

    const [navbar, setNavbar] = useState(false);

    const toggleNavbar = () => {
        if(window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', toggleNavbar);

    return (
        <div className={"navbar_holder" + (navbar ? ' hide_nav' : ' show_nav')}>
            <div className="navbar_web">
            <ul className="nav_item_container">
                <li> <img src={appLogo} className="app_logo"/> </li>
                <li className="active">Home</li>
                <li>Dogs</li>
                <li>Shop</li>
            </ul>
            </div>
        </div>
        
    )

}


export default NavigationBar;