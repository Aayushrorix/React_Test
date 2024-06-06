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

    const handleImageError = (e) => {
      e.target.src = 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';
    };
  
    return (
      <div>
        <nav>
        <ul style={{display: 'flex', listStyleType: 'none',padding: '0px'}}>
          <li style={{marginRight: '15px'}}>
            <Link to="/">Home</Link>
          </li>
          <li style={{marginRight: '15px'}}>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
        <h1>Chai aur API in react</h1>
        <input type='text' style={{float:'left'}} placeholder='Search' value={search} onChange={(e)=> setSearch(e.target.value)}/>
        {/* <h2>Number of Products are: {products.length}</h2> */}
        <div>===========================================================================================================================================</div>
  
        {loading && (<h1>Loading...</h1>)}
        {/* <div style={{display: loading ? 'none' : 'block'}}> */}
        {products && (

        <>
          {products.map((p)=>(
           
            <span key={p.id} style={{border:'1px solid black',textAlign:'center',display:'inline-block',margin:'40px',maxWidth:'300px',fontFamily:'arial'}}>
              <img src={p.image} alt='image' onError={handleImageError} style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2)',height:'300px',width:'300px'}}></img>
              <br/><b>{p.name}</b>
              <hr/>
              <br/><b style={{color:'gray',fontSize:'22px'}}>${p.price}</b>
          </span>
            
           
          ))}
          </>
        )}
        {/* </div> */}
        <div>===========================================================================================================================================</div>
      </div>
    );
}

export default Products
