// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'

import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
  ]);


  return (

    // <React.StrictMode>
    //   <RouterProvider router={router} />
    // </React.StrictMode>

    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route  path='/contact' element={<Contact/>}/>
          <Route  path='/about' element={<About/>}/>
          <Route  path='/' element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
