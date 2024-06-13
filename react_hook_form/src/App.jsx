import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const {register, handleSubmit, reset  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  return (
    <div className="App">
      <div className="container py-5">
        <div className="card border-0 shadow p-4 w-50 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input type="text" className="form-control" id="fullname" name="fullname" {...register('fullname', { required: true })}/>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" name="email" {...register('email', { required: true })}/>
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="text" className="form-control" id="phone" name="phone" {...register('phone', { required: true })}/>
            </div>

            {/* <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" name="password" {...register('password', { required: true })}/>
            </div>

            <div className='form-group'>
              <div className="form-check form-check-inline">
                <input className="form-check-input"name='gender' {...register('gender', { required: true })} type="radio" id="male" value="male" />
                <label className="form-check-label" htmlFor="male">male</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input"name='gender' {...register('gender', { required: true })} type="radio" id="female" value="female" />
                <label className="form-check-label" htmlFor="female">female</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input"name='gender' {...register('gender', { required: true })} type="radio" id="other" value="other" />
                <label className="form-check-label" htmlFor="other">other</label>
              </div>
            </div>

            <div className='form-group'>
              <select className="custom-select" name='state' {...register('state', { required: true })}>
                <option value="" defaultChecked>Select your state</option>
                <option value="Delhi">Delhi</option>
                <option value="Punjab">Punjab</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Bihar">Bihar</option>
              </select>
            </div>

            <div className='form-group'>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" {...register('terms_and_conditions', { })} name='terms_and_conditions' id="terms" value="agree" />
                <label className="form-check-label" htmlFor="terms">I agree all terms and conditons</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" {...register('send_me_updates', {  })} name='send_me_updates' id="updates" />
                <label className="form-check-label" htmlFor="updates">send me latest Bootstrap updates</label>
              </div>
            </div> */}

            <div className="form-group">
              <label htmlFor="line1">Address Line 1</label>
              <input type="text" className="form-control" id="line1" name="address[0]" {...register('address[0]', { required: true })}/>
            </div>
            <div className="form-group">
              <label htmlFor="line2">Address Line 2</label>
              <input type="text" className="form-control" id="line2" name="address[1]" {...register('address[1]', { required: true })}/>
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" className="form-control" id="city" name="address.city" {...register('address.city', { required: true })}/>
            </div>
            <div className="form-group">
              <label htmlFor="zip">Zip</label>
              <input type="text" className="form-control" id="zip" name="address.zip" {...register('address.zip', { required: true })}/>
            </div>

            <button type='submit' className='btn btn-primary'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
