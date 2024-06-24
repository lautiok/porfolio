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
                                    <h3 className="title">{t('experience.carlosaimar.category')}</h3>
                                    <h4 className="company">{t('experience.carlosaimar.title')}</h4>
                                    <time className="date">{t('experience.carlosaimar.year')}</time>
                                </div>
                            </div>
                            <div className="right-column">
                                <p className="description">{t('experience.carlosaimar.description')}</p>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
