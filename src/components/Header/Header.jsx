import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header-module.css';

export const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleNav = () => {
        setIsActive(!isActive);
    };

    const handleLinkClick = () => {
        setIsActive(false);
    };

    return (
        <header className="animate__animated animate__bounce animate__fadeInDown">
            <div className="logo">
                <Link to="/"><span> {'/>'} </span>Nahuel Guerra</Link>
            </div>
            <button className="button" onClick={toggleNav}>
                <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>
            <nav className={`nav ${isActive ? 'activo' : ''}`}>
                <ul className="ul">
                    <li className="li"><NavLink to="/" onClick={handleLinkClick}>Home</NavLink></li>
                    <li className="li"><NavLink to="/porfolio" onClick={handleLinkClick}>Porfolio</NavLink></li>
                    <li className="li"><NavLink to="/aboutme" onClick={handleLinkClick}>About me</NavLink></li>
                    <li className="li"><NavLink to="/certificates" onClick={handleLinkClick}>certificates</NavLink></li>
                </ul>
                <a className="cv" href="https://drive.google.com/file/d/1V4el4Yf3rD2_Fvj_ltp9ZETAIA9D9i-Y/view?usp=share_link" target="_blank">my curriculum</a>
            </nav>
        </header>
    )
}