import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const {register, handleSubmit, reset, formState: { errors }} = useForm();

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  return (
    <div>
      <div >
        <div className='div-form'>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="field">
              <label htmlFor="fullname">Full Name</label>
              <input type="text" className="form-control" id="fullname" name="fullname" {...register('fullname', { required: true })}/>
              {errors.fullname && <span className="error">Full Name is required</span>}
            </div>

            <div className="field">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" name="email" {...register('email', { required: true })}/>
              {errors.email && <span className="error">Email is required</span>}
            </div>

            <div className="field">
              <label htmlFor="phone">Phone Number</label>
              <input type="text" className="form-control" id="phone" name="phone" {...register('phone', { required: true })}/>
              {errors.phone && <span className="error">Phone Number is required</span>}
            </div>

            {/* Repeat similar error handling for other fields */}
            
            <div className="field">
              <label htmlFor="addressLine1">Address Line 1</label>
              <input type="text" className="form-control" id="addressLine1" name="addressLine1" {...register('addressLine1', { required: true })}/>
              {errors.addressLine1 && <span className="error">Address Line 1 is required</span>}
            </div>

            <div className="field">
              <label htmlFor="addressLine2">Address Line 2</label>
              <input type="text" className="form-control" id="addressLine2" name="addressLine2" {...register('addressLine2', { required: true })}/>
              {errors.addressLine2 && <span className="error">Address Line 2 is required</span>}
            </div>

            <div className="field">
              <label htmlFor="city">City</label>
              <input type="text" className="form-control" id="city" name="city" {...register('city', { required: true })}/>
              {errors.city && <span className="error">City is required</span>}
            </div>

            <div className="field">
              <label htmlFor="zip">Zip</label>
              <input type="text" className="form-control" id="zip" name="zip" {...register('zip', { required: true })}/>
              {errors.zip && <span className="error">Zip is required</span>}
            </div>

            <button type='submit' className='btn-add'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App