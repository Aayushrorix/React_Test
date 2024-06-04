import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [error, setError] = useState(false)

  useEffect( ()=> {
    const controller = new AbortController()
    ;(async () => {
      try{
        setLoading(true)
        const response = await axios.get('/api/products?search='+search,{
          signal: controller.signal
        })
        console.log(response.data);
        setProducts(response.data)
        setLoading(false)
      } catch(error){
        if (axios.isCancel(error)){
          console.log('Requested canceled ',error.message)
          return
        }
        setError(true)
        setLoading(false)
      }
    })()

    // cleanup
    return ()=>{
      controller.abort()
    }
  },[search])

  // const [products, loading] = customReactQuery('/api/products')

  // if(loading){
  //   return <h1>Loading...</h1>
  // }

  return (
    <div className="App">
      <h1>Chai aur API in react</h1>
      <input type='text' placeholder='Search' value={search} onChange={(e)=> setSearch(e.target.value)}/>
      <h2>Number of Products are: {products.length}</h2>

      {loading && (<h1>Loading...</h1>)}
      <div style={{display: loading ? 'none' : 'block'}}>
        {products.map((p)=>(
          <div key={p.id} style={{margin:"12px",border:"1px solid"}}>
            <span> {p.name} </span><br/>
            {/* <span> {p.age} </span><br/> */}
            <span> {p.price} </span><br/>
            <span> {p.image} </span>
          </div>
        ))}
      </div>
    </div>
  );
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