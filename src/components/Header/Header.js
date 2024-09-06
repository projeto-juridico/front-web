// src/components/Header/Header.js
import React from 'react';
import logo from '../../assets/logo.png'
import './Header.css';

const Header = ({ title = "Titulo Padrão "}) => {
    return (
        <header className='header-container'>
            <div className='header-logo'>
                <img src={logo} alt='logo' className='logo-image'/>
            </div>
            <h1 className='header-title'>{title}</h1>
        </header>
    )
}

export default Header;