// import logo from './logo.svg';
import './App.css';
import Body from './components/body';
import Header from './components/header'
import Cart from './components/cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" Component={Body}/>
          <Route path="/cart" Component={Cart } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
