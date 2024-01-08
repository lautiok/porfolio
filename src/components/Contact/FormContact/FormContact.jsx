import React, { useState } from 'react'
import './FormContact-module.css'

export const FormContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        affair: '',
        message: '',
    })
    const hanbleSubmit = (e) => {
        e.preventDefault()
        if (
            formData.name.trim() === '' ||
            formData.email.trim() === '' ||
            formData.message.trim() === ''
        ) {
            alert('Los campos Name, Email y Message son obligatorios')
            return
        }

        document.getElementById('myForm').submit()
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    return (
        <section data-aos="fade-up" id="formm" className="formulario-contact">
            <div className="container">
                <h2 className="h-contet">
                    contact us<span>.</span>
                </h2>
                <div className="contact-wrapper animated bounceInUp">
                    <div className="contact-form">
                        <h3>write to us</h3>
                        <form
                            id="myForm"
                            action="https://formsubmit.co/nahuelguerra56b@gmail.com"
                            method="POST"
                            onSubmit={hanbleSubmit}
                        >
                            <p>
                                <label>name and surname</label>
                                <input type="text" name="name" onChange={handleChange} />
                            </p>
                            <p>
                                <label>email</label>
                                <input type="email" name="email" onChange={handleChange} />
                            </p>
                            <p>
                                <label>phone</label>
                                <input type="tel" name="phone" onChange={handleChange} />
                            </p>
                            <p>
                                <label>affair</label>
                                <input type="text" name="affair" onChange={handleChange} />
                            </p>
                            <p className="block">
                                <label>message</label>
                                <textarea name="message" rows="3" onChange={handleChange}></textarea>
                            </p>
                            <p className="block">
                                <button type="submit">send</button>
                                <input
                                    type="hidden"
                                    name="_next"
                                    value="https://nahuelguerra.com.ar/aboutme"
                                />
                                <input type="hidden" name="_captcha" value="false" />
                            </p>
                        </form>
                    </div>
                    <div className="contact-info">
                        <h4>more information</h4>
                        <ul>
                            <li>
                                <i className="fas fa-map-marker-alt"></i> Buenos aires,
                                Argentina
                            </li>
                            <li>
                                <i className="fas fa-envelope-open-text"></i>{' '}
                                contact@nahuelguerra.com.ar
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
