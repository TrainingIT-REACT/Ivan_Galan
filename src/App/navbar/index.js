import React from 'react';
import style from './navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={style.container}>
            <Link to='/' className="nav-link" href="#"><i className={["fas fa-user", style.icon].join(' ')}></i> User</Link>
            <a className="nav-link" href="#"><i className={["fas fa-bookmark", style.icon].join(' ')}></i> Favoritos</a>
            <a className="nav-link" href="#"><i className={["fas fa-search", style.icon].join(' ')}></i> Buscar</a>
        </nav>
  );
}

export default Navbar;