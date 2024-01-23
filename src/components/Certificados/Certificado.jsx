import React from 'react';
import desarrolloweb from '../../assets/certificado-desarrollo.webp';
import javascript from '../../assets/certificado-javascript.png';
import reactjs from '../../assets/certificadoreactjs.png';
import carrerafront from '../../assets/certificadofrontend.jpg';
import './CerfificadosModule.css';

export const Certificado = () => {
    return (
        <section className='certificado'>
            <h2>Certificates</h2>

            <div className='certificadov1'>
                <div className='certinfo'>
                    <h2>Web Development</h2>
                    <p className='date'>May 2023 - Coderhouse</p>
                    <h3>Topics Learned:</h3>
                    <p className='text'>Prototyping and basic HTML concepts <br /> Getting started with HTML <br /> Including CSS in our project <br /> CSS + Box Modeling <br /> Flexbox <br /> GRIDS <br /> Pseudo-classes and BEM <br /> CSS Frameworks + Bootstrap <br /> GIT + GITHUB <br /> SASS <br /> Animations <br /> SEO and best practices <br /> Web servers</p>
                    <h4 className='nf'>FINAL PROJECT GRADE: 10</h4>
                </div>
                <div className='certimg'>
                    <a href="https://coderhouse.com/"><img src={desarrolloweb} alt="webdevelopment" /></a>
                </div>
            </div>

            <div className='certificadov1'>
                <div className='certinfo'>
                    <h2>JavaScript</h2>
                    <p className='date'>August 2023 - Coderhouse</p>
                    <h3>Topics Learned:</h3>
                    <p className='text'>General concepts: Syntax and variables <br /> Flow control <br /> Loops and iterations <br /> Functions <br /> Objects <br /> Arrays <br /> Higher-order functions <br /> DOM <br /> Events <br /> Storage & JSON <br /> Advanced operators <br /> Libraries <br /> Asynchrony and promises <br /> Ajax & Fetch <br /> Frameworks & NodeJS</p>
                    <h4 className='nf'>FINAL PROJECT GRADE: 9</h4>
                </div>
                <div className='certimg'>
                    <a href="https://coderhouse.com/"><img src={javascript} alt="javascript" /></a>
                </div>
            </div>


            <div className='certificadov1'>
                <div className='certinfo'>
                    <h2>ReactJS</h2>
                    <p className='date'>December 2023 - Coderhouse</p>
                    <h3>Topics Learned:</h3>
                    <p className='text'>Introduction to React Js <br /> Environment setup and configuration <br /> JSX and transpiling <br /> Components <br /> Promises, asynchrony, and MAP <br /> Consuming APIs <br /> Hooks, Children, and Patterns <br /> Routing and navigation <br /> Events <br /> Context <br /> Rendering techniques <br /> Firebase</p>
                    <h4 className='nf'>FINAL PROJECT GRADE: 9</h4>
                </div>
                <div className='certimg'>
                    <a href="https://coderhouse.com/"><img src={reactjs} alt="reactjs" /></a>
                </div>
            </div>


            <div className='certificadov1'>
                <div className='certinfo'>
                    <h2>Frontend React Development Career</h2>
                    <p className='date'>December 2023 - Coderhouse</p>
                    <h3>Topics Learned:</h3>
                    <p className='text'>Web Development <br /> JavaScript <br /> ReactJS <br /> Git and GitHub <br /> Firebase <br /> SEO and best practices </p>
                    <h4 className='nf'>FINAL GRADE: 9.33</h4>
                </div>
                <div className='certimg'>
                    <a href="https://coderhouse.com/"><img src={carrerafront} alt="frontendcareer" /></a>
                </div>
            </div>
        </section>
    );
};
