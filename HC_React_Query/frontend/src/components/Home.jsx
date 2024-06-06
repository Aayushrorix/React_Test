import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <nav>
        <ul style={{display: 'flex', listStyleType: 'none',padding: '0px'}}>
          <li style={{marginRight: '15px'}}>
            <Link to="/">Home</Link>
          </li>
          <li style={{marginRight: '15px'}}>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Home
