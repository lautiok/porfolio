import React from 'react'
import './Footer-module.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

export const Footer = () => {
    return (
        <footer data-aos="fade-up">
            <div className="logo-footer">
                <Link to='/'><img src={logo} alt="logo" /></Link>
            </div>
            <div className="social">
                <a href="https://www.instagram.com/laauti.ok/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                <a href="https://github.com/lautiok" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
                <a href="https://twitter.com/laautiiokk" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
                <a href="https://www.linkedin.com/in/nahuel-guerra-002479229/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
            </div>
            <Link to='/login'><i className="bi bi-box-arrow-in-left"></i></Link>
        </footer>
    )
}
