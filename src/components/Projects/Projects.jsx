import React from 'react'
import './ProjectsModule.css'
import { useTranslation } from 'react-i18next'
import ipm from '../../assets/projects/coffe.png'
import eco from '../../assets/projects/wolf.png'
export const Projects = () => {
    const [t] = useTranslation('global')

    return (
        <div id='projects' className='project-container'>
            <div id='project' className='projects'><h2> <i className="bi bi-backpack4-fill"></i> {t('projects.title')}</h2></div>
            <div className='projects'>
                <div className='project-module'>
                    <div className='project-img'>
                        <img src={ipm} alt="projects" />
                    </div>
                    <div className='project-description'>
                        <h2>{t('projects.ipm.title')}</h2>
                        <p>{t('projects.ipm.technologies')}</p>
                        <p className='description'>{t('projects.ipm.description')}</p>
                        <div className='button-project'>
                            <a href="https://github.com/lautiok/coffe" target="_blank" rel="noreferrer" ><i class="bi bi-github"></i> {t('projects.button.git')}</a>
                            <a href="https://coffe-wheat.vercel.app/" target="_blank" rel="noreferrer" ><i class="bi bi-link-45deg"></i> {t('projects.button.live')}</a>
                        </div>
                    </div>
                </div>
                <div className='project-module'>
                    <div className='project-img'>
                        <img src={eco} alt="projects" />
                    </div>
                    <div className='project-description'>
                        <h2>{t('projects.eco.title')}</h2>
                        <p>{t('projects.eco.technologies')}</p>
                        <p className='description'>{t('projects.eco.description')}</p>
                        <div className='button-project'>
                            <a href="https://github.com/lautiok/proyecto-reactjs" target="_blank" rel="noreferrer" ><i class="bi bi-github"></i> {t('projects.button.git')}</a>
                            <a href="https://proyecto-reactjs-rouge.vercel.app/" target="_blank" rel="noreferrer" ><i class="bi bi-link-45deg"></i> {t('projects.button.live')}</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
