import React, { useEffect, useState } from 'react'
import { Student } from '../models/studentModel'
import { useAddStudentMutation, useGetStudentsQuery, useUpdateStudentMutation } from '../slices/studentSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AddEdit() {
  const [students, setStudents] = useState<Student>(Object);
  const navigate = useNavigate()

  const {id} = useParams();
  console.log("id---->",id)

  const [addStudent] = useAddStudentMutation();
  const [editMode, setEditMode] = useState(false);
  const [updateStudent] = useUpdateStudentMutation();
  
  // const allStudents = useSelector(state => Object.values(state.api.queries)[0]["data"])
  // // console.log("========>",Object.values(allStudents)[0]["data"])
  // console.log("========>",allStudents)
  // const currStudent = allStudents.filter((s)=>(s.id == id))[0]

  const allStudents = useSelector(state => {
    const queries = Object.values(state.api.queries);
    return queries.length > 0 && queries[0].data ? queries[0].data : [];
  });

  const currStudent = allStudents.find(s => s.id == id);

  console.log("Current ===> ",currStudent)

  // const [name,setName] = useState(currStudent?currStudent.studentName:"")
  // const [email,setEmail] = useState(currStudent?currStudent.studentEmail:"")


  

  // const {refetch} = useGetStudentsQuery();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // [e.target.name] = e.target.value
    console.log("====> ",e.target.name,"==>",e.target.value)
    setStudents({...students, [e.target.name]: e.target.value })
    console.log("students -> ",students)
  };

  useEffect(()=>{
    if(id && currStudent){
      setStudents({...currStudent})
      setEditMode(true)
    }
    else{
      setEditMode(false)
    }
  },[])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    if(!editMode){
      await addStudent(students);
    }
    else{
      await updateStudent(students);
    }
    // refetch();
    navigate("/student");
    setEditMode(false)
    // console.log("==========>",students)
  }
  

  return (
    <div className='container mx-auto'>
      {/* <h2>Add and Edit Form</h2> */}
      <h2>{editMode?"Update Form" : "Create Form"}</h2>

      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label className='form-label'>Student Name</label>
            <input type='text' name='studentName' value={students?.studentName || ""} onChange={handleChange} className='form-control'/>
        </div>
        <div className='mb-3'>
            <label className='form-label'>Student Email</label>
            <input type='email' name='studentEmail' value={students?.studentEmail || ""} onChange={handleChange} className='form-control'/>
        </div>

        <button type='submit' className='btn btn-primary'>
            {editMode? "Update":"Add"}
        </button>
      </form>
    </div>
  )
}

export default AddEdit
