import React, { useState, useRef, useEffect } from 'react';
import './ProjectsBStyle.css';
import ecommerce from '../../assets/projects/ipm.png';
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
        <div className='img' onClick={() => handleCardClick('ecommerce')}>
          <img src={ecommerce} alt='ecommerce' />
        </div>
        <div className='info-project-button'>
          <h2 onClick={() => handleCardClick('ecommerce')}>{t('projects.ecommerce.title')}</h2>
          <div className='button-g-p'>
            <a href='https://github.com/lautiok/Ecommerce' target='_blank'> <i className='bi bi-github'></i></a>
            <a href='#' target='_blank' > <i className='bi bi-link-45deg'></i></a>
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
            <a href='https://github.com/lautiok/togo'> <i className='bi bi-github'></i></a>
            <a href='https://togo-hazel.vercel.app/'> <i className='bi bi-link-45deg'></i></a>
          </div>
        </div>
      </div>
      {showDetails && (
        <div className='modal-overlay'>
          <div className='modal' ref={modalRef}>
            <button className='close' onClick={handleCloseDetails}>Cerrar</button>
            <div className='modal-content'>
              <div className='img-modal'>
              <img src={selectedProject === 'ecommerce' ? ecommerce : togo} alt={selectedProject === 'ecommerce' ? 'ecommerce' : 'togo'} />
            </div>
            <div className='info-modal'>
              <h2>{selectedProject === 'ecommerce' ? t('projects.ecommerce.title') : t('projects.togo.title')}</h2>
              <p>{selectedProject === 'ecommerce' ? t('projects.ecommerce.technologies') : t('projects.togo.technologies')}</p>
              <h3>{selectedProject === 'ecommerce' ? t('projects.ecommerce.description') : t('projects.togo.description')}</h3>
            <div className='button-g-p-modal'>
              <a href={selectedProject === 'ecommerce' ? 'https://github.com/lautiok/Ecommerce' : 'https://github.com/lautiok/togo'} target='_blank'> <i className='bi bi-github'></i></a>
              <a href={selectedProject === 'ecommerce' ? '#' : 'https://togo-hazel.vercel.app/'} target='_blank' > <i className='bi bi-link-45deg'></i></a>
            </div>
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
