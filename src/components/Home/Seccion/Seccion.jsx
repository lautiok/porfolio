import React from 'react'
import './Seccion-module.css'

export const Seccion = ({ name }) => {
    return (
        <div data-aos="fade-up" className="abbz">
            <h2 className="abb">
                <span>{'<'}</span> {name} <span>{'>'}</span>
            </h2>
        </div>
    )
}
