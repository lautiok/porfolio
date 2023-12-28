import React, { useState } from 'react';
import './LoginModule.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Dash } from '../Dash/Dash';

export const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [error, setError] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const auth = getAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, usuario, contrasena);
            setError(false);
            setIsLoggedIn(true);
        } catch (error) {
            setError(true);
            setIsLoggedIn(false);
        }
    };

    if (isLoggedIn) {
        return <Dash />;
    }

    return (
        <section className='login'>
            <h2>Iniciar sesión</h2>
            <form className="login-module" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Usuario"
                    className="input-login"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    className="input-login"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                />
                <button type="submit" className="btn-login">
                    INGRESAR
                </button>
            </form>
            {error && <p>Usuario o contraseña incorrectos</p>}
        </section>
    );
};
