import './App.css'
import { useFormik, Formik, Form, Field} from 'formik'
import { signupValidation } from './signupValidation'

const initialValues = {
  name:'',
  email:'',
  password:'',
  cpassword:''
}

function App() {

  // const {values, handleBlur, handleSubmit, handleChange, errors } = useFormik({
  //   initialValues:initialValues,
  //   validationSchema: signupValidation,
  //   onSubmit: (values) => {
  //     console.log(values)
  //   }
  // })

  // console.log(values)

  return (
    // <div>
    //   <form onSubmit={handleSubmit}>

    //     <div>
    //       <label htmlFor='name'>Name</label>
    //       <br/>
    //       <input type='text' name='name' value={values.name} onBlur={handleBlur} onChange={handleChange}/>
    //       <br/>
    //       {errors.name && <small>{errors.name}</small>}
    //     </div>

    //     <div>
    //       <label htmlFor='email'>Email</label>
    //       <br/>
    //       <input type='email' name='email' value={values.email} onBlur={handleBlur} onChange={handleChange}/>
    //       <br/>
    //       {errors.email && <small>{errors.email}</small>}
    //     </div>

    //     <div>
    //       <label htmlFor='password'>Password</label>
    //       <br/>
    //       <input type='password' name='password' value={values.password} onBlur={handleBlur} onChange={handleChange}/>
    //       <br/>
    //       {errors.password && <small>{errors.password}</small>}
    //     </div>

    //     <div>
    //       <label htmlFor='cpassword'>Confirm Password</label>
    //       <br/>
    //       <input type='password' name='cpassword' value={values.cpassword} onBlur={handleBlur} onChange={handleChange}/>
    //       <br/>
    //       {errors.cpassword && <small>{errors.cpassword}</small>}
    //     </div>

    //     <div>
    //       <button type='submit'>Submit</button>
    //     </div>

    //   </form>
    // </div>

    <div>
      <Formik
      initialValues={initialValues}
      validationSchema={signupValidation}
      onSubmit={(values, { resetForm })=>{console.log(values); resetForm(); }}>
        {({errors}) => (
          <div>
          <Form className="login-box">

            <div className="user-box">
              <label htmlFor='name'>Name</label>
              <br/>
              {/* <input type='text' name='name' value={values.name} onBlur={handleBlur} onChange={handleChange}/> */}
              <Field type='text' name='name'></Field>
              <br/>
              {errors.name && <small className="error">{errors.name}</small>}
            </div>
    
            <div className="user-box">
              <label htmlFor='email'>Email</label>
              <br/>
              {/* <input type='email' name='email' value={values.email} onBlur={handleBlur} onChange={handleChange}/> */}
              <Field type='email' name='email'></Field>
              <br/>
              {errors.email && <small className="error">{errors.email}</small>}
            </div>
    
            <div className="user-box">
              <label htmlFor='password'>Password</label>
              <br/>
              {/* <input type='password' name='password' value={values.password} onBlur={handleBlur} onChange={handleChange}/> */}
              <Field type='password' name='password'></Field>
              <br/>
              {errors.password && <small className="error">{errors.password}</small>}
            </div>
    
            <div className="user-box">
              <label htmlFor='cpassword'>Confirm Password</label>
              <br/>
              {/* <input type='password' name='cpassword' value={values.cpassword} onBlur={handleBlur} onChange={handleChange}/> */}
              <Field type='password' name='cpassword'></Field>
              <br/>
              {errors.cpassword && <small className="error">{errors.cpassword}</small>}
            </div>
    
            <div>
              <button type='submit'>Submit</button>
            </div>
    
          </Form>
          </div>
        )}
      
      </Formik>
    </div>
  )
}

export default App
