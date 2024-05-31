import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showUser } from '../features/userDetailSlice'
import { Link } from 'react-router-dom'

function Read() {
    const dispatch = useDispatch()

    const {users, loading} = useSelector((state) => state.app)

    useEffect(()=>{
        dispatch(showUser());
    },[]);

    if(loading){
        return (<h2>Loading</h2>)
    }

  return (
    <div>
        <h2> All Data</h2>

        {users.map((ele)=>(
            <div style={{margin:"5px",backgroundColor:"lightgray"}} className='card w-50 mx-auto'>
                <div>
                {ele.name}<br/>
                {ele.email}<br/>
                {ele.age}<br/>
                {ele.gender}<br/>
                </div>
                <div>
                <Link style={{margin:"5px"}} to='/view'>View</Link>
                <Link style={{margin:"5px"}} to='/edit'>Edit</Link>
                <Link style={{margin:"5px"}} to='/read'>Delete</Link>
                </div>
            </div>
            
        ))}
    </div>
  )
}

export default Read
