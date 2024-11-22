import React from "react";
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <h2>Guerwan Lescrohart</h2>
            <nav className='nav'>
                <Link reloadDocument className="nav-dark" to="/">Accueil</Link>
                <Link className="nav-light" to="/#about">A propos</Link>
                <Link className="nav-dark" to="/#projects">Projets</Link>
                <Link className="nav-light" to="/#contact">Contacts</Link>
            </nav>
        </header>
    )
}

export default Header