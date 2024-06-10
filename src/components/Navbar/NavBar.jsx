import React from 'react';
import './NavModule.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    const [t] = useTranslation('global');

    const handleClick = (e, targetId) => {
        e.preventDefault();
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (

        <div className='div-nav-blog'>
        <header>
            <nav>
                <ul>
                    <li>
                        <a onClick={(e) => handleClick(e, "experience")} href="#experience">{t('navbar.experience')}</a>
                    </li>
                    <li>
                        <a onClick={(e) => handleClick(e, "projects")} href="#projects">{t('navbar.projects')}</a>
                    </li>
                    <li>
                        <a onClick={(e) => handleClick(e, "technologies")} href="#technologies">{t('navbar.technologies')}</a>
                    </li>
                    <li>
                        <a onClick={(e) => handleClick(e, "myblog")} href="#myblog">Blog</a>
                    </li>
                    <li>
                        <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=nahuelguerra56b@gmail.com" target='_black' rel="noreferrer" >{t('navbar.contact')}</a>
                    </li>
                </ul>
            </nav>
        </header>
        </div>
        
    );
};
