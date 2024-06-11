// import React from 'react'
import {  NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark bg-tertiary">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Home</NavLink>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/student">Students</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/create">Add/Edit</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Header
