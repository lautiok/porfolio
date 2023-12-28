import React, { useEffect } from 'react';
import dw from '../../../assets/certificado-desarrollo.webp';
import reactjs from '../../../assets/certificadoreactjs.png';
import js from '../../../assets/certificado-javascript.png';
import frontend from '../../../assets/certificadofrontend.jpg';
import 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
import './CarruselContactModule.css';

export const CarruselContact = () => {
    useEffect(() => {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    }, []);

    return (

        <>
            <div className='certificates'>
                <h2>certificates</h2>
            </div>
            <div className='owl-carousel-container'>
                <div className="owl-carousel">
                    <div className="carousel-item"><img src={dw} alt="Imagen 1" /></div>
                    <div className="carousel-item"><img src={js} alt="Imagen 2" /></div>
                    <div className="carousel-item"><img src={reactjs} alt="Imagen 3" /></div>
                    <div className="carousel-item"><img src={frontend} alt="Imagen 4" /></div>
                </div>
            </div>

        </>
    );
};
