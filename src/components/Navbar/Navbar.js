import React, { useState } from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom'
import { NAVBAR_ITEMS } from '../../constants/constants'

const Navbar = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    return (
        <div className='Navbar'>
            <div className='Navbar-Logo-Container'>
                <Link
                    to='/'
                    className='Navbar-Logo'
                >
                    <img src={process.env.PUBLIC_URL + '/assets/logo.webp'} alt='Logo' />
                    <span>tft</span>
                </Link>
            </div>
            <div className={`Navbar-Items-Container ${isOpen ? 'Navbar-Active' : ''}`} >
                {NAVBAR_ITEMS.map( ({ id, name, path }) => {
                    return (
                        <Link 
                            to= {path} 
                            key= {id} 
                            className= {`Navbar-Item ${isOpen ? 'Navbar-Active' : ''}`}
                            onClick= { () => setIsOpen(!isOpen) }
                        >
                            {name}
                        </Link>
                    )
                })}
            </div>
            <div 
                className= {`Navbar-Hamburger ${isOpen ? 'Navbar-Hamburger-Active' : ''}`}
                onClick= { () => setIsOpen(!isOpen) }
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
export default Navbar