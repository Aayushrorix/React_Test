// import React from 'react'
import { Link } from 'react-router-dom';
import { useDeleteStudentMutation, useGetStudentsQuery } from '../slices/studentSlice';
// import { useState } from 'react';

function Read() {

  const { data, isSuccess, isError, error, isLoading } = useGetStudentsQuery();

  const [deleteStudent] = useDeleteStudentMutation();

  console.log("data ===> ",data)
  // console.log("error ==> ",error)

  return (
    <div className='container mx-auto'>
      <h2>Read Operation</h2>
      <div className='row'>
        {isLoading && <span>Loading...</span>}
        {isError && <span>Something went wrong --&gt; {error.error}</span>}
        {isSuccess &&
          data?.map((student)=>(
          <div key={student?.id} className='col-3'>
          <div className="card" style={{width:'18rem',margin:'4px'}}>
            <div className="card-body">
              <h5 className="card-title">{student?.studentName}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{student?.studentEmail}</h6>
              {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
              <button className="card-link" onClick={() => deleteStudent(student?.id)}>Delete</button>
              <button className="card-link"><Link to={`/edit/${student?.id}`}>Edit</Link></button>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Read
