import './App.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function App() {
  const formik = useFormik({
    initialValues : {
      username:"",
      name:"",
      email:"",
      status:"",
      country:""
    },
    validationSchema:Yup.object({
      username:Yup.string()
      .max(10,"username must be less than or equal to 10 characters")
      .required("this is required field"),
      name:Yup.string()
      .required("this is required field"),
      email:Yup.string()
      .email("Please Provide Valid Email")
      .required("this is required field"),
      status:Yup.string()
      .required("this is required field"),
      country:Yup.string()
      .required("this is required field")
    }),
    onSubmit:(values) => {
      console.log("Form Submitted",values)
    }
  })

  console.log(formik.touched)
  return (
    <div className='div-form'>
      <form onSubmit={formik.handleSubmit}>

        <div className='field'>
          <label  >Username  </label><span className='required'>*</span><br/>
          <input type="text" name='username' onChange={formik.handleChange} onBlur={formik.handleBlur}  placeholder='Your Username' value={formik.values.username}/>
          {formik.touched.username && formik.errors.username && <p style={{color:"red"}}>{formik.errors.username}</p>}
        </div>
        {/* <label>Username </label>
        <input
        type="text"
        name="username"
        onChange={formik.handleChange}
        value={formik.values.username}
        onBlur={formik.handleBlur}
        placeholder='type username'
        /><br/> */}
        {/* {formik.touched.username && formik.errors.username && <p style={{color:"red"}}>{formik.errors.username}</p>} */}

        <div className='field'>
          <label  >Name  </label><span className='required'>*</span><br/>
          <input type="text" name='name' onChange={formik.handleChange} onBlur={formik.handleBlur}  placeholder='Your Name' value={formik.values.name}/>
          {formik.touched.name && formik.errors.name && <p style={{color:"red"}}>{formik.errors.name}</p>}
        </div>
        {/* <label>Name </label>
        <input
        type="text"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        onBlur={formik.handleBlur}
        placeholder='type your name'
        /><br/>
        {formik.touched.name && formik.errors.name && <p style={{color:"red"}}>{formik.errors.name}</p>} */}

        <div className='field'>
          <label  >Email  </label><span className='required'>*</span><br/>
          <input type="email" name='email' onChange={formik.handleChange} onBlur={formik.handleBlur}  placeholder='Your Email' value={formik.values.email}/>
          {formik.touched.email && formik.errors.email && <p style={{color:"red"}}>{formik.errors.email}</p>}
        </div>
        {/* <label>Email </label>
        <input
        type="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
        placeholder='type your emailid'
        /><br/>
        {formik.touched.email && formik.errors.email && <p style={{color:"red"}}>{formik.errors.email}</p>} */}

        <div className='field'>
          <label  >Your Status  </label><span className='required'>*</span><br/>
          <label>Single</label><br/>
          <input
          type='radio'
          name='status'
          value="single"
          onChange={formik.handleChange}
          /><br/>
          <label>Commited</label><br/>
          <input
          type='radio'
          name='status'
          value="commited"
          onChange={formik.handleChange}
          />
          {/* <input type="email" name='email' onChange={formik.handleChange} onBlur={formik.handleBlur}  placeholder='Your Email' value={formik.values.email}/> */}
          {formik.touched.status && formik.errors.status && <p style={{color:"red"}}>{formik.errors.status}</p>}
        </div>
        {/* <label>Your Status : </label>
        <label>Single</label>
        <input
        type='radio'
        name='status'
        value="single"
        onChange={formik.handleChange}
        />
        <label>Commited</label>
        <input
        type='radio'
        name='status'
        value="commited"
        onChange={formik.handleChange}
        /><br/>
        {formik.touched.status && formik.errors.status && <p style={{color:"red"}}>{formik.errors.status}</p>} */}

        <div className='field'>
          <label  >Country  </label><span className='required'>*</span>
          <select name='country' onChange={formik.handleChange} onBlur={formik.handleBlur}>
            <option value="">Select Country</option>
            <option value="india">India</option>
            <option value="pak">Pakistan</option>
            <option value="nepal">Nepal</option>
          </select>
          {formik.touched.country && formik.errors.country && <p style={{color:"red"}}>{formik.errors.country}</p>}
        </div>
        {/* <label>Country </label>
        <select name='country' onChange={formik.handleChange} onBlur={formik.handleBlur}>
          <option value="">Select Country</option>
          <option value="india">India</option>
          <option value="pak">Pakistan</option>
          <option value="nepal">Nepal</option>
        </select><br/>
        {formik.touched.country && formik.errors.country && <p style={{color:"red"}}>{formik.errors.country}</p>} */}

        <button className='btn-add' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
