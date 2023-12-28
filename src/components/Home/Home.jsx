import React, { useEffect } from 'react'
import { Hero } from './Hero/Hero'
import { Flecha } from './Flecha/Flecha'
import { Seccion } from './Seccion/Seccion'
import { AboutMe } from './AboutMe/AboutMe'
import { CardProjects } from './CardProjects/CardProjects'
import { Sembrador } from '../../utils/Sembrador/Sembrador'


export const Home = () => {
    //useEffect(() => {
    //  Sembrador()
    //}, [])
    return (
        <>
            <Hero />
            <Flecha />
            <Seccion name="about me" />
            <AboutMe />
            <Seccion name="Projects" />
            <CardProjects />
        </>
    )
}
