import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../../config/FirebaseConfig';
import './CardProjects-module.css';

const techToIconClass = {
    "CSS": "bi bi-filetype-css",
    "HTML": "bi bi-filetype-html",
    "JavaScript": "bi bi-filetype-js",
    "Bootstrap": "bi bi-bootstrap",
    "Git": "bi bi-git",
    "sass": "bi bi-filetype-sass",
    "react": "bi bi-filetype-jsx",
};

export const CardProjects = () => {
    const [projects, setProjects] = useState([]);
    const [numProductsToShow, setNumProductsToShow] = useState(3);
    const [isLoading, setIsLoading] = useState(true);

    const handleClick = () => {
        setNumProductsToShow(prevNum => prevNum + 4);
    };

    const fetchProjects = async () => {
        setIsLoading(true);
        const projectsCollection = collection(db, 'projects');
        const projectsSnapshot = await getDocs(projectsCollection);
        const projectsList = projectsSnapshot.docs.map(doc => doc.data());
        const firstNProjects = projectsList.slice(0, numProductsToShow);
        setProjects(firstNProjects);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchProjects();
    }, [numProductsToShow]);

    return (
        <>
            <section data-aos="fade-up" className="proyect">
                {isLoading ? (
                    <div className="servicios-card">
                        <h2>Cargando...</h2>
                    </div>
                ) : (
                    projects.map((project, index) => (
                        <div className="servicios-card" key={index}>
                            <div className="image-container">
                                <img src={project.imageSrc} alt={project.name} />
                                <div className="icons-container">
                                    {project.technologies.map(tech => {
                                        const iconClass = techToIconClass[tech];
                                        return <i className={iconClass}></i>;
                                    })}
                                </div>
                            </div>
                            <h3>{project.name}</h3>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-github"></i>
                            </a>
                            <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-browser-chrome"></i>
                            </a>
                        </div>
                    ))
                )}
            </section>
            <div data-aos="fade-up" className="ver-mas">
                <p onClick={handleClick}>See all <span>projects</span></p>
            </div>
        </>
    );
};