import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Create from './components/Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Read from './components/Read';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/create' element={<Create/>} />
          <Route exact path='/read' element={<Read/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
