import React from 'react'
import './Kill-module.css'
import html from '../../../assets/htmlpng.png'
import css from '../../../assets/css.png'
import js from '../../../assets/js.png'
import react from '../../../assets/react.png'
import sql from '../../../assets/sql.png'
import git from '../../../assets/gitpng.png'
import { Seccion } from '../../Home/Seccion/Seccion'

export const Kill = () => {
    return (
        <section data-aos="fade-up" className="informacion-lenguajes">
            <Seccion name="Technologies" />
            <div className="logos-l animate__animated animate__bounce animate__backInUp">
                <a className="html" href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank" rel="noreferrer"><img src={html} alt="html" /></a>
                <a className="css" href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank" rel="noreferrer"><img src={css} alt="css" /></a>
                <a className="js" href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src={js} alt="js" /></a>
                <a className="reat" href="https://developer.mozilla.org/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started" target="_blank" rel="noreferrer"><img src={react} alt="react" /></a>
                <a className="sql" href="https://developer.mozilla.org/es/docs/Glossary/SQL" target="_blank" rel="noreferrer"><img src={sql} alt="sql" /></a>
                <a className="git" href="https://developer.mozilla.org/es/docs/Glossary/Git" target="_blank" rel="noreferrer"><img src={git} alt="git" /></a>
            </div>
        </section>
    )
}

