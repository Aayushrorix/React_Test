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

import { CounterProvider } from './components/CounterContext';
import Counter from './components/Counter';

import { useState, createContext, useContext } from "react";


import A from './components/test'

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}


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

    <>
    <h1>React Zustand Counter Example</h1>
    <A/>
    <h3>===================================================================================</h3>
    <Component1 />
    <h3>===================================================================================</h3>
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
    <h3>===================================================================================</h3>
    <CounterProvider>
      <div className="App">
        <h1>React Context Counter Example</h1>
        <Counter />
      </div>
    </CounterProvider>
    </>
  );
}

export default App;
