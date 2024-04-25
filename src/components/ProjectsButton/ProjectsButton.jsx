import React, { useState, useRef, useEffect } from 'react';
import './ProjectsBStyle.css';
import ipm from '../../assets/projects/ipm.png';
import togo from '../../assets/projects/togo.png';
import { useTranslation } from 'react-i18next';

export const ProjectsButton = () => {
  const [t] = useTranslation('global');
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseDetails();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedProject(null);
  };

  return (
    <div className='projects-button-container'>
      {/* Renderizar las tarjetas */}
      <div className='projects-button'>
        <div className='img' onClick={() => handleCardClick('ipm')}>
          <img src={ipm} alt='ipm' />
        </div>
        <div className='info-project-button'>
          <h2 onClick={() => handleCardClick('ipm')}>{t('projects.ipm.title')}</h2>
          <div className='button-g-p'>
            <a href=''> <i className='bi bi-github'></i></a>
            <a href=''> <i className='bi bi-link-45deg'></i></a>
          </div>
        </div>
      </div>
      <div className='projects-button'>
        <div className='img'>
          <img src={togo} alt='togo' onClick={() => handleCardClick('togo')} />
        </div>
        <div className='info-project-button'>
          <h2 onClick={() => handleCardClick('togo')}>{t('projects.togo.title')}</h2>
          <div className='button-g-p'>
            <a href=''> <i className='bi bi-github'></i></a>
            <a href=''> <i className='bi bi-link-45deg'></i></a>
          </div>
        </div>
      </div>

      {/* Mostrar el modal si showDetails es true */}
      {showDetails && (
        <div className='modal-overlay'>
          <div className='modal' ref={modalRef}>
            <button className='close' onClick={handleCloseDetails}>Cerrar</button>
            <div className='modal-content'>
              <div className='img-modal'>
              <img src={selectedProject === 'ipm' ? ipm : togo} alt={selectedProject === 'ipm' ? 'ipm' : 'togo'} />
            </div>
            <div className='info-modal'>
              <h2>{selectedProject === 'ipm' ? t('projects.ipm.title') : t('projects.togo.title')}</h2>
              <p>{selectedProject === 'ipm' ? t('projects.ipm.technologies') : t('projects.togo.technologies')}</p>
              <h3>{selectedProject === 'ipm' ? t('projects.ipm.description') : t('projects.togo.description')}</h3>
            </div>  
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};
