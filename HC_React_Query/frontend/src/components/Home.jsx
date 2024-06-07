import React from 'react'
import { Link } from 'react-router-dom'
import './products.css'

function Home() {
  return (
    <div className='header grid-container'>
      <nav className='grid-item'>
        <ul className='head-ul'>
          <li className='head-li'>
            <Link to="/">Home</Link>
          </li>
          <li className='head-li'>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Home
