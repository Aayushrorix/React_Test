import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, showUser } from '../features/userDetailSlice'
import { Link, useNavigate } from 'react-router-dom'

function Read() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {users, loading} = useSelector((state) => state.app)

    useEffect(()=>{
        dispatch(showUser());
    },[]);

    if(loading){
        return (<h2>Loading</h2>)
    }

    function deleteUserfun(id){
        dispatch(deleteUser(id))
        // navigate('/read')
    }

  return (
    <div>
        <h2> All Data</h2>

        {users.map((ele)=>(
            <div key={ele.id+1} style={{margin:"5px",backgroundColor:"lightgray"}} className='card w-50 mx-auto'>
                <div key={ele.id+2}>
                {ele.name}<br/>
                {ele.email}<br/>
                {ele.age}<br/>
                {ele.gender}<br/>
                </div>
                <div key={ele.id+3}>
                <Link style={{margin:"5px"}} to='/view'>View</Link>
                <Link style={{margin:"5px"}} to='/edit'>Edit</Link>
                <button style={{margin:"5px"}} onClick={()=>(deleteUserfun(ele.id))}>Delete</button>
                </div>
            </div>
            
        ))}
    </div>
  )
}

export default Read
