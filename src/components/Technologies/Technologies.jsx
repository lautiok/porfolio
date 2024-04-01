import React from 'react'
import './TechologiesModule.css'
import { useTranslation } from 'react-i18next'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import sass from '../../assets/sass.png'
import bootstrap from '../../assets/boots.png'
import javascript from '../../assets/javaScript.png'
import reactjs from '../../assets/react.png'
import nodejs from '../../assets/node.png'
import mongo from '../../assets/mongo.png'
import firebase from '../../assets/firebase.png'
import wordpress from '../../assets/wordpress.png'

export const Technologies = () => {
    const [t] = useTranslation('global')
    return (
        <div className='technologies-container'>
            <div id='technologies' className='technologies-title'><h2><i className="bi bi-lightbulb-fill"></i> {t('technologies.title')}</h2></div>
            <div className='content-technologies'>
                <div className='technologies'>
                    <img src={html} alt="technologies" />
                    <p>HTML</p>
                </div>
                <div className='technologies'>
                    <img src={css} alt="technologies" />
                    <p>CSS</p>
                </div>
                <div className='technologies'>
                    <img src={sass} alt="technologies" />
                    <p>SASS</p>
                </div>
                <div className='technologies'>
                    <img src={bootstrap} alt="technologies" />
                    <p>BOOTSTRAP</p>
                </div>
                <div className='technologies'>
                    <img src={javascript} alt="technologies" />
                    <p>JAVASCRIPT</p>
                </div>
                <div className='technologies'>
                    <img src={reactjs} alt="technologies" />
                    <p>REACTJS</p>
                </div>
                <div className='technologies'>
                    <img src={nodejs} alt="technologies" />
                    <p>NODEJS</p>
                </div>
                <div className='technologies'>
                    <img src={mongo} alt="technologies" />
                    <p>MONGO</p>
                </div>
                <div className='technologies'>
                    <img src={firebase} alt="technologies" />
                    <p>FIREBASE</p>
                </div>
                <div className='technologies'>
                    <img src={wordpress} alt="technologies" />
                    <p>WORDPRESS</p>
                </div>
            </div>
        </div>
    )
}
