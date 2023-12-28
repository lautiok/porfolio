import React from 'react'
import './AboutMe-module.css'
import FotoAbout from '../../../assets/foto-principal-lik.png'
export const AboutMe = () => {
    return (
        <section data-aos="fade-up" className="about">
            <div className="me-about">
                <h2>Who is Nahuel Guerra?</h2>
                <p>Full stack developer trained at Coderhouse academy and continues to improve his skills.</p>
            </div>
            <div className="me-about-foto">
                <img src={FotoAbout} alt="about" />
            </div>
        </section>
    )
}
