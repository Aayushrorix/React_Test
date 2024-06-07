import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'
import { useDebounce } from './hooks';
import './products.css'

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

    const handleImageError = (e) => {
      e.target.src = 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';
    };
  
    return (
      <div>
        <div className='header grid-container'>
          <nav className='grid-item'>
            <ul className='head-ul'>
              <li className='head-li'>
                <Link to="/">Home</Link>
              </li>
              <li className='head-li'>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </nav>

          <h1 className='heading grid-item'>Chai aur API in react</h1>
          <div className='search-container'>
            <input type='text' className='search' placeholder='Search' value={search} onChange={(e)=> setSearch(e.target.value)}/>
          </div>
        </div>
        {/* <h2>Number of Products are: {products.length}</h2> */}
        {/* <div style={{borderBottom:'1px solid'}}> </div> */}
        <hr/>
  
        {loading && (<h1>Loading...</h1>)}
        {/* <div style={{display: loading ? 'none' : 'block'}}> */}
        {products && (

          <div className='container-div grid-container'>
            {products.map((p)=>(
            
              <div key={p.id} className='product-card grid-item'>
                <img src={p.image} alt='image' onError={handleImageError} ></img>
                <br/><p className='pname'>{p.name}</p>
                <hr className='hrtag'/>
                <b className='price'>${p.price}</b>
              </div>
            ))}
          </div>
        )}
        <hr/>
      </div>
    );
}

export default Products
