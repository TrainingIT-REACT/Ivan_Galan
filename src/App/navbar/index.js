import React from 'react';
import style from './navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={style.container}>
            <NavLink to='/home' className={["nav-link", style.link].join(' ')} activeClassName={style.active}><i className={["fas fa-home", style.icon].join(' ')}></i> Home</NavLink>
            <NavLink to='/profile' className={["nav-link", style.link].join(' ')} activeClassName={style.active}><i className={["fas fa-user", style.icon].join(' ')}></i> User</NavLink>
            <NavLink to='/favorites' className={["nav-link", style.link].join(' ')} activeClassName={style.active}><i className={["fas fa-bookmark", style.icon].join(' ')}></i> Favorites</NavLink>
            <NavLink to='/find' className={["nav-link", style.link].join(' ')} activeClassName={style.active}><i className={["fas fa-search", style.icon].join(' ')}></i> Find</NavLink>
        </nav>
  );
}

export default Navbar;