import React from 'react'
import './ExperienceModule.css'
import { useTranslation } from 'react-i18next'
export const Experience = () => {
    const [t] = useTranslation('global')
    return (
        <>
            <div className='container'>
                <div id='experience' className='experience'><h2> <i className="bi bi-backpack4-fill"></i> {t('experience.title')}</h2></div>
                <div className="timeline">
                    <div className="event">
                        <div className="bullet"></div>
                        <div className="line"></div>
                        <div className="content">
                            <div className="left-column">
                                <div className="info">
                                    <h3 className="title">{t('experience.radioipm.category')}</h3>
                                    <h4 className="company">{t('experience.radioipm.title')}</h4>
                                    <time className="date">{t('experience.radioipm.year')}</time>
                                </div>
                            </div>
                            <div className="right-column">
                                <p className="description">{t('experience.radioipm.description')}</p>
                                <a href="#" className="more-info">{t('experience.button')}<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg></a>
                            </div>
                        </div>
                    </div>
                    <div className="event">
                        <div className="bullet"></div>
                        <div className="line"></div>
                        <div className="content">
                            <div className="left-column">
                                <div className="info">
                                    <h3 className="title">{t('experience.carlosaimar.category')}</h3>
                                    <h4 className="company">{t('experience.carlosaimar.title')}</h4>
                                    <time className="date">{t('experience.carlosaimar.year')}</time>
                                </div>
                            </div>
                            <div className="right-column">
                                <p className="description">{t('experience.carlosaimar.description')}</p>
                                <a href="#" className="more-info">{t('experience.button')}<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg></a>
                            </div>
                        </div>
                    </div>
                    <div className="event">
                        <div className="bullet"></div>
                        <div className="line"></div>
                        <div className="content">
                            <div className="left-column">
                                <div className="info">
                                    <h3 className="title">{t('experience.hermanosluci.category')}</h3>
                                    <h4 className="company">{t('experience.hermanosluci.title')}</h4>
                                    <time className="date">{t('experience.hermanosluci.year')}</time>
                                </div>
                            </div>
                            <div className="right-column">
                                <p className="description">{t('experience.hermanosluci.description')}</p>
                                <a href="#" className="more-info">{t('experience.button')}<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
