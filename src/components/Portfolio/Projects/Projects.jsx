import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../../config/FirebaseConfig';
import './Projects-module.css';

// Objeto de mapeo
const techToIconClass = {
    "CSS": "bi bi-filetype-css",
    "HTML": "bi bi-filetype-html",
    "JavaScript": "bi bi-filetype-js",
    "Bootstrap": "bi bi-bootstrap",
    "Git": "bi bi-git",
    "sass": "bi bi-filetype-sass",
    "react": "bi bi-filetype-jsx",
};

export const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const fetchProjects = async () => {
        setIsLoading(true);
        const projectsCollection = collection(db, 'projects');
        const projectsSnapshot = await getDocs(projectsCollection);
        const projectsList = projectsSnapshot.docs.map(doc => doc.data());
        const firstNProjects = projectsList.slice(0);
        setProjects(firstNProjects);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <>
            <section className="proyect">
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
        </>
    );
};