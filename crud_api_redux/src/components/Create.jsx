import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailSlice';

function Create() {
    const [users, setUsers] = useState({});

    const dispatch = useDispatch();

    const getUserData = (e) => {
        setUsers({...users, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('users... ',users)
        if(!users['gender']){
            users['gender'] = 'female'
        }
        dispatch(createUser(users))
    }

  return (
    <div>
      <form className='w-50 mx-auto my-5' onSubmit={handleSubmit}>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input name='name' type="text" className="form-control" onChange={getUserData}/>
        </div>
        <div className="mb-3">
            <label className="form-label">Eamil</label>
            <input name='email' type="email" className="form-control" onChange={getUserData}/>
        </div>
        <div className="mb-3">
            <label className="form-label">Age</label>
            <input name='age' type="number" className="form-control" onChange={getUserData}/>
        </div>

        <div className="mb-3">
            <input className="form-check-input" name='gender' value="male" id='male' type="radio" onChange={getUserData}/>
            <label className="form-check-label">
                Male
            </label>
        </div>
        <div className="mb-3">
            <input className="form-check-input" name='gender' value="female" id='female' type="radio" defaultChecked/>
            <label className="form-check-label">
                Female
            </label>
        </div>

        <button type="submit" onClick={()=>{console.log('Hiii')}} className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Create
