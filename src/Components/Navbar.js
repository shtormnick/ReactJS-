import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
    <nav className='navbar navbar-dark navbar-expand-lg bg-primary'>
        <a className="navbar-brand" href="#">React App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item active">
                   <NavLink className='nav-link' to="/" exact>Home</NavLink>
                </li>
                <li className="nav-item active">
                   <NavLink className='nav-link' to="/about">About</NavLink>
                </li>
            </ul>
        </div>
    </nav>
 )