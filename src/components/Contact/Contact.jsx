import React from 'react'
import { Welcome } from '../Contact/Welcome/Welcome'
import { FormContact } from './FormContact/FormContact'
import { CarruselContact } from './CarruselContact/CarruselContact'

export const Contact = () => {
    return (
        <>
            <Welcome />
            <CarruselContact />
            <FormContact />
        </>
    )
}

