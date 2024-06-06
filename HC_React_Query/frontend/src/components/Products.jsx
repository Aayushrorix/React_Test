import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'
import { useDebounce } from './hooks';

const fetchProducts = async (search) => {
  // const response = await fetch('/api/products?search='+search)
  const response = await fetch('https://6656ba529f970b3b36c64b09.mockapi.io/products')
  const data = await response.json()
  return data
}

function Products() {
    // const [products, setProducts] = useState([])
    // const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const debouncedSearch = useDebounce(search,1000)
    // const [error, setError] = useState(false)

    console.log("===============>",debouncedSearch)

    const {
      loading, error, data:products,
    } = useQuery({queryKey:['products',debouncedSearch] ,queryFn: () => fetchProducts(debouncedSearch)})
  
      // useEffect( ()=> {
      //   const controller = new AbortController()
      //   ;(async () => {
      //     try{
      //       setLoading(true)
      //       const response = await axios.get('/api/products?search='+search,{
      //         signal: controller.signal
      //       })
      //       console.log(response.data);
      //       setProducts(response.data)
      //       setLoading(false)
      //     } catch(error){
      //       if (axios.isCancel(error)){
      //         console.log('Requested canceled ',error.message)
      //         return
      //       }
      //       setError(true)
      //       setLoading(false)
      //     }
      //   })()
    
      //   // cleanup
      //   return ()=>{
      //     controller.abort()
      //   }
      // },[search])
  
    // const [products, loading] = customReactQuery('/api/products')
  
    if(loading){
      return <h1>Loading...</h1>
    }
  
    return (
      <div>
        <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
        <h1>Chai aur API in react</h1>
        <input type='text' placeholder='Search' value={search} onChange={(e)=> setSearch(e.target.value)}/>
        {/* <h2>Number of Products are: {products.length}</h2> */}
  
        {loading && (<h1>Loading...</h1>)}
        {/* <div style={{display: loading ? 'none' : 'block'}}> */}
        {products && (

        <>
          {products.map((p)=>(
            <div key={p.id} style={{width:"auto",margin:"12px",border:"1px solid"}}>
              <div style={{float:"left",marginTop: "28px",marginLeft:"95px"}}>
                <span>Product : {p.name} </span><br/>
                {/* <span> {p.age} </span><br/> */}
                <span>Price : {p.price} </span>
              </div>
              {/* <span> {p.image} </span> */}
              <img src={p.image} alt='image' style={{width:"100px",height:"100px"}}></img>
            </div>
          ))}
          </>
        )}
        {/* </div> */}
        <div>=================================================================</div>
      </div>
    );
}

export default Products
