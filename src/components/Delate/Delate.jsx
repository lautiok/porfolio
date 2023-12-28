import React, { useEffect, useState } from 'react';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';
import './DelateModule.css';

export const Delate = () => {
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

    const handleDelate = async (projectId) => {
        try {
            await deleteDoc(doc(db, 'projects', projectId));
            fetchProjects();
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    }
    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <>
            <section className="proyect-delate">
                {isLoading ? (
                    <div className="servicios-card-delate">
                        <h2>Cargando...</h2>
                    </div>
                ) : (
                    projects.map((project, index) => (
                        <div className="servicios-card-delate" key={index}>
                            <div className="image-container-delate">
                                <img src={project.imageSrc} alt={project.name} />
                                <div className="icons-container-delate">
                                    <button className='btn-delate' onClick={() => handleDelate(project.id)}>delete</button>
                                </div>
                            </div>
                            <h3>{project.name}</h3>
                        </div>
                    ))
                )}
            </section>
        </>
    );
};
