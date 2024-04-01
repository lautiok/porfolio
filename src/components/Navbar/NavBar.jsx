import React from 'react';
import './NavModule.css';
import { useTranslation } from 'react-i18next';

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
                        <a onClick={(e) => handleClick(e, "contact")} href="#contact">{t('navbar.contact')}</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
