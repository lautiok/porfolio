import React from 'react'
import './Welcome-module.css'
import fotoP from '../../../assets/abou-me.png'

export const Welcome = () => {

    return (
        <section className="about-me">
            <div className="inf-about">
                <h2>Nahuel Guerra</h2>
                <p>Full-stack developer passionate about technology and computer science. Studied at Coderhouse Academy, acquiring solid skills in web and mobile development. Always up-to-date with the latest technological trends. Expert in front-end and back-end</p>
            </div>
            <div className="foto-about">
                <img src={fotoP} alt="about" />
            </div>
        </section>
    )
}
