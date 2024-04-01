import React, { useState, useEffect } from 'react';
import './HeroSeccionModule.css';
import { useTranslation } from 'react-i18next';
import FotosP from '../../assets/foto-principal-lik.png';

export const HeroSeccion = () => {
    const [t, i18n] = useTranslation('global');
    const [language, setLanguage] = useState(i18n.language);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLanguage(lng);
    };

    useEffect(() => {
        setLanguage(i18n.language);
    }, [i18n.language]);

    return (
        <>
            <div id='hero' className='hero'>
                <div className='img-status-enes'>
                    <img src={FotosP} alt="Nahuel Guerra" />
                    <p>{t('hero.status')}</p>
                    <div className='esen'>
                        <button onClick={() => changeLanguage('en')} className={language === 'en' ? 'active' : ''}>EN</button>
                        <span className='span-separador'>/</span>
                        <button onClick={() => changeLanguage('es')} className={language === 'es' ? 'active' : ''}><span className='enesd'>ES</span></button>
                    </div>
                </div>
            </div>
            <div className='info-hero'>
                <h1>{t('hero.hey im')} <a href="https://drive.google.com/uc?export=download&id=1V4el4Yf3rD2_Fvj_ltp9ZETAIA9D9i-Y" target="_blank" rel="noreferrer"><i className="bi bi-cloud-download"></i></a></h1>
                <p>{t('hero.my experience')}</p>
                <div className='boton-redes'>
                    <a href="https://github.com/lautiok" target="_blank" rel="noreferrer" className='btn1'><i className="bi bi-github"></i>GitHub</a>
                    <a className='btn2' href="https://www.linkedin.com/in/nahuel-guerra/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i>LinkedIn</a>
                </div>
            </div>
        </>

    );
};
