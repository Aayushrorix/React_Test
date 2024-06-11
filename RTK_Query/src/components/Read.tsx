// import React from 'react'
import { Link } from 'react-router-dom';
import { useDeleteStudentMutation, useGetStudentsQuery } from '../slices/studentSlice';
// import { useState } from 'react';

function Read() {

  const { data, isSuccess, isError, isLoading } = useGetStudentsQuery();

  const [deleteStudent] = useDeleteStudentMutation();

  // console.log("data ===> ",data)
  // console.log("error ==> ",error)

  return (
    <div className='container mx-auto'>
      <h2>Read Operation</h2>
      <div className='container-grid row'>
        {isLoading && <span>Loading...</span>}
        {isError && <span>Something went wrong </span>}
        {isSuccess &&
          data?.map((student) => (
          <div key={student?.id} className='grid-item col-md-4 col-sm-6 mb-4'>
            <div className='card h-100' style={{border: '1px solid'}}>
              <div className='card-body'>
                <h5 className='card-title'>{student?.studentName}</h5>
                <h6 className='card-subtitle mb-2 text-muted'>{student?.studentEmail}</h6>
                <button className='btn btn-link p-0' onClick={() => deleteStudent(student?.id)}>Delete</button>
                <Link to={`/edit/${student?.id}`} className='btn btn-link p-0'>Edit</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
  </div>
  )
}

export default Read
