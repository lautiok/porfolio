import React from 'react'
import './AboutMe-module.css'
import FotoAbout from '../../../assets/foto-principal-lik.png'
export const AboutMe = () => {
    return (
        <section data-aos="fade-up" className="about">
            <div className="me-about">
                <h2>Who is Nahuel Guerra?</h2>
                <p>Full-stack developer passionate about technology and computer science. Studied at Coderhouse Academy, acquiring solid skills in web and mobile development. Always up-to-date with the latest technological trends. Expert in front-end and back-end</p>
            </div>
            <div className="me-about-foto">
                <img src={FotoAbout} alt="about" />
            </div>
        </section>
    )
}
