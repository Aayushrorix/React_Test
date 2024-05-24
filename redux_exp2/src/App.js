// import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home'
import Form from './components/form'

function App() {
  return (
    <>
      <Router>
        <div className="App" style={{alignItems:"center"}}>
          <Header />
          <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/add" element={React.createElement(Form, { type: 'add' })} />
            <Route path="/edit/:userId" element={React.createElement(Form, { type: 'edit' })} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
