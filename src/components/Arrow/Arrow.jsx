import React, { useEffect, useState } from 'react';
import './ArrowModule.css';

export const Arrow = () => {
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const scrollTotop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth', })

    }

    return (
        <div className={'arrow'} onClick={scrollTotop} style={{ display: isVisible ? 'block' : 'none' }}>
            <i className="bi bi-arrow-bar-up"></i>
        </div>
    )
}
