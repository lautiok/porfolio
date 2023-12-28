import React from 'react';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/FirebaseConfig";
import './DashModule.css';
import { Delate } from '../Delate/Delate';

export const Dash = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const githubLink = event.target.githubLink.value;
        const imageSrc = event.target.imageSrc.value;
        const liveDemoLink = event.target.liveDemoLink.value;
        const technologies = [
            event.target.technology1.value,
            event.target.technology2.value,
            event.target.technology3.value,
            event.target.technology4.value,
        ];

        try {
            // Usar la función addDoc para agregar un documento a la colección
            const docRef = await addDoc(collection(db, 'projects'), {
                name,
                githubLink,
                imageSrc,
                liveDemoLink,
                technologies,
            });

            console.log('Documento agregado con ID:', docRef.id);

            // Limpiar los campos específicos después de enviar los datos
            event.target.name.value = '';
            event.target.githubLink.value = '';
            event.target.imageSrc.value = '';
            event.target.liveDemoLink.value = '';
            event.target.technology1.value = '';
            event.target.technology2.value = '';
            event.target.technology3.value = '';
            event.target.technology4.value = '';
        } catch (error) {
            console.error('Error al enviar los datos a Firebase:', error);
        }
    };

    return (
        <section className='dash'>
            <div className='dash-module-container'>
                <h2>AGREGAR PROYECTO</h2>
                <form className='dash-module' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='Nombre del proyecto'
                        className='input-proyect'
                        name='name'
                    />
                    <input
                        type='text'
                        placeholder='Enlace GitHub'
                        className='input-proyect'
                        name='githubLink'
                    />
                    <input
                        type='text'
                        placeholder='Enlace de la imagen'
                        className='input-proyect'
                        name='imageSrc'
                    />
                    <input
                        type='text'
                        placeholder='Enlace del demo en vivo'
                        className='input-proyect'
                        name='liveDemoLink'
                    />
                    <input
                        type='text'
                        placeholder='Tecnología 1'
                        className='input-proyect'
                        name='technology1'
                    />
                    <input
                        type='text'
                        placeholder='Tecnología 2'
                        className='input-proyect'
                        name='technology2'
                    />
                    <input
                        type='text'
                        placeholder='Tecnología 3'
                        className='input-proyect'
                        name='technology3'
                    />
                    <input
                        type='text'
                        placeholder='Tecnología 4'
                        className='input-proyect'
                        name='technology4'
                    />
                    <button type='submit' className='btn-proyect'>
                        ENVIAR
                    </button>
                </form>
            </div>
            <div className='delate'>
                <Delate />
            </div>
        </section>
    );
};
