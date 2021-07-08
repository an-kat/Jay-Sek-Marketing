import React from 'react';
import "./Header.scss"
import jsmLogo from "../../images/jsm.png"

const Header = () => {
    return (
        <div className={"header"}>
            <div className={"header-wrap"}>
                <div className={"header-logo"}>
                    <img src={jsmLogo} alt=""/>
                    <p>JAY SEK <span>MARKETING</span></p>
                </div>
                <div className={"header-menu"}>
                    <ul>
                        <li>Home</li>
                        <li>Our Work</li>
                        <li>Our Clients</li>
                        <li>Book a Call</li>
                    </ul>
                </div>
                <div className={"header-start"}>
                    <p>Get Started</p>
                </div>
            </div>
        </div>
    );
};

export default Header;