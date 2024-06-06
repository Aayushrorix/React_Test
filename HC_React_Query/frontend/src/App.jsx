import { useEffect, useState } from 'react';
import axios from 'axios';
import Products from './components/Products';
import {BrowserRouter as Router, Routes ,Route, Link } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div >
      <div style={{listStyleType: "none",display:"block"}}>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App;


// const customReactQuery = (urlPath) => {
//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(false)

//   useEffect( ()=> {
//     (async () => {
//       setLoading(true)
//       const response = await axios.get(urlPath)
//       console.log(response.data);
//       setProducts(response.data)
//       setLoading(false)
//     })()
//   },[])

//   return [products,loading]
// }