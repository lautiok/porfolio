import React, { useEffect, useState } from 'react'
import './Hero-module.css'
import coffe from '../../../assets/coffe.png'

export const Hero = () => {
    const text = " Full Stack Developer | Developer with extensive experience in independent projects.";
    const [index, setIndex] = useState(0);
    const [typewriterText, setTypewriterText] = useState("");
    const speed = 35;

    useEffect(() => {
        if (index < text.length) {
            setTypewriterText((prevText) => prevText + text.charAt(index));
            const timeoutId = setTimeout(() => setIndex((prevIndex) => prevIndex + 1), speed);
            return () => clearTimeout(timeoutId);
        }
    }, [index, text]);
    return (
        <section className="hero">
            <div className="info animate__animated animate__bounce animate__pulse">
                <h2>
                    Writing the future<span>,</span>line by line
                </h2>
                <p id="typewriter">{typewriterText}</p>
                <div className="social">
                    <a href="https://www.instagram.com/laauti.ok/" target="_blank">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://github.com/lautiok" target="_blank">
                        <i className="bi bi-github"></i>
                    </a>
                    <a href="https://twitter.com/laautiiokk" target="_blank">
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/nahuel-guerra-002479229/" target="_blank">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>
            </div>
            <div className="info-foto animate__animated animate__bounce animate__backInRight">
                <img src={coffe} alt="" />
            </div>
        </section>
    )
}
