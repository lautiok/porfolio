import React from 'react'
import { useTranslation } from 'react-i18next'
import './ContactModule.css'
export const Contact = () => {
    const [t] = useTranslation('global')
    return (
        <div className='contact-container'>
            <div id='contact' className='contact'><h2> <i className="bi bi-backpack4-fill"></i> {t('contact.title')}</h2></div>
            <form className='contact-form' action="">
                <label>nahuelguerra56b@gmail.com</label>
                <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=nahuelguerra56b@gmail.com" target="_blank" rel="noreferrer"><i className="bi bi-play"></i></a>
            </form>
        </div>
    )
}
