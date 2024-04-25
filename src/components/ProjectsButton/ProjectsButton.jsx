import React from 'react'
import './ProjectsBStyle.css'
import ipm from '../../assets/projects/ipm.png'
import togo from '../../assets/projects/togo.png'
import { useTranslation } from 'react-i18next'

export const ProjectsButton = () => {
    const [t] = useTranslation('global')
  return (
    <div className='projects-button-container'>
        <div className='projects-button'>
            <div className='img'>
                <img src={ipm} alt="ipm" />
            </div>
        <div className='info-project-button'>
            <h2>{t('projects.ipm.title')}</h2>
            <div className='button-g-p'>
                <a href=""> <i className="bi bi-github"></i></a>
                <a href=""> <i className="bi bi-link-45deg"></i></a>
            </div>
        </div>
        </div>
        <div className='projects-button'>
            <div className='img'>
                <img src={togo} alt="ipm" />
            </div>
        <div className='info-project-button'>
            <h2>{t('projects.togo.title')}</h2>
            <div className='button-g-p'>
                <a href=""> <i className="bi bi-github"></i></a>
                <a href=""> <i className="bi bi-link-45deg"></i></a>
            </div>
        </div>
        </div>
    </div>
      
  )
}
