// import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Add from './components/add'
import Home from './components/home'
import Edit from './components/edit'

function App() {
  return (
    <>
      <Router>
        <div className="App" style={{alignItems:"center"}}>
          <Header />
          <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/add" Component={Add } />
            <Route path="/edit/:userId" element={<Edit />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
