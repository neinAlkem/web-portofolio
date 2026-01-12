import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const NavBar = () => {
const [scrolled, setScrolld] = useState(false)

useEffect(() => {
    const handleScroll = () => {
        const isScrolled = window.scrollY > 0
        if (isScrolled !== scrolled) {
            setScrolld(isScrolled)
        }
    }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className='inner'>
            <a href="#hero" className='logo'>
                Baghas Rizaluddin | Data Engineering
            </a>

            <nav className='desktop'>
                <ul>
                    {navLinks.map(({link, name}) => (
                        <li key={name} className='group'>
                            <a href={link}>
                                <span>{name}</span>
                                <span className='underlienr' />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            
            <a href="#contact" className='contact-btn group'>
                <div className='inner'>
                    <span>Contact Me</span>
                </div>
            </a>
        </div>
    </header>
  )
}

export default NavBar