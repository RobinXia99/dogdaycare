import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import appLogo from '../../images/ddaycare-logo.png';
import '../../styles/navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon,faBars,faXmark } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = ({device}) => {

    let navigate = useNavigate();
    let location = useLocation();

    const [navbarVisible, setNavbarVisible] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    

    function toggleNavbar () {
        if(window.scrollY >= 80) {
            setNavbarVisible(true);
        } else {
            setNavbarVisible(false);
        }
    };

    function toggleDropdown () {
        setDropdownVisible(!dropdownVisible);
    };

    const Dropdown = () => {
        return (
            <div className="navbar_mobile_dropdown">
                <li 
                onClick={() => {
                    navigate('/')
                    setDropdownVisible(false);
                }} 
                className={(location.pathname == '/' ? 'dropdown_active' : '')}
                >Home</li>
                <li
                onClick={() => {
                    navigate('/search')
                    setDropdownVisible(false);
                }}
                className={(location.pathname == '/search' || location.pathname.includes('/dogs') ? 'dropdown_active' : '')}
                >Registry</li>
            </div>
        )
    };



    window.addEventListener('scroll', toggleNavbar);

    return (device == 'web') ? 
    (
        <div className={"navbar_holder" + (navbarVisible ? ' hide_nav' : ' show_nav')}>
            <div className="navbar_web">
            <ul className="nav_item_container">
                <li> <img src={appLogo} onClick={() => navigate('/')} className="app_logo"/> </li>
                <li onClick={() => navigate('/')} className={(location.pathname == '/' ? 'active' : '')}>Home</li>
                <li onClick={() => navigate('/search')} className={(location.pathname == '/search' || location.pathname.includes('/dogs') ? 'active' : '')}>Registry</li>
                <i><FontAwesomeIcon icon={faMoon} className='fa_icon_appearance'/></i>
            </ul>
            </div>
        </div>
        
    )
    :
    (
        <div className="navbar_holder">
            <div className="navbar_mobile">
                <i onClick={toggleDropdown}><FontAwesomeIcon icon={(dropdownVisible) ? faXmark : faBars}/></i>
                <aside><img src={appLogo}></img></aside>
            </div>

            {dropdownVisible
            ? <Dropdown></Dropdown>
            : ''
            }
            
        </div>
    )

}



export default NavigationBar;