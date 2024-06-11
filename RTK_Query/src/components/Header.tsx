// import React from 'react'
import {  Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark bg-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Home</Link>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to="/student">Students</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/create">Add/Edit</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Header
