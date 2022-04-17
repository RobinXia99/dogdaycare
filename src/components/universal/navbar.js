import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import appLogo from '../../images/ddaycare-logo.png';
import '../../styles/navbar.css'

const NavigationBar = () => {

    let navigate = useNavigate();
    let location = useLocation();

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
                <li> <img src={appLogo} onClick={() => navigate('/')} className="app_logo"/> </li>
                <li onClick={() => navigate('/')} className={(location.pathname == '/' ? 'active' : '')}>Home</li>
                <li onClick={() => navigate('/search')} className={(location.pathname == '/search' ? 'active' : '')}>Registry</li>
                <li>Shop</li>
            </ul>
            </div>
        </div>
        
    )

}


export default NavigationBar;