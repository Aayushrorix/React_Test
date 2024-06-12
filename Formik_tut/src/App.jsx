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
    onSubmit: (values, { resetForm }) => {
      console.log("Form Submitted", values);
      // Reset the form after submission
      resetForm();

      console.log("Form Submitted", values);

    }
  })

 
  return (
    <div className='div-form'>
      <form onSubmit={formik.handleSubmit}>

        <div className='field'>
          <label  >Username  </label><span className='required'>*</span><br/>
          <input type="text" name='username' onChange={formik.handleChange} onBlur={formik.handleBlur}  placeholder='Your Username' value={formik.values.username}/>
          {formik.touched.username && formik.errors.username && <p style={{color:"red"}}>{formik.errors.username}</p>}
        </div>

        <div className='field'>
          <label  >Name  </label><span className='required'>*</span><br/>
          <input type="text" name='name' onChange={formik.handleChange} onBlur={formik.handleBlur}  placeholder='Your Name' value={formik.values.name}/>
          {formik.touched.name && formik.errors.name && <p style={{color:"red"}}>{formik.errors.name}</p>}
        </div>

        <div className='field'>
          <label  >Email  </label><span className='required'>*</span><br/>
          <input type="email" name='email' onChange={formik.handleChange} onBlur={formik.handleBlur}  placeholder='Your Email' value={formik.values.email}/>
          {formik.touched.email && formik.errors.email && <p style={{color:"red"}}>{formik.errors.email}</p>}
        </div>

        <div className='field'>
          <label  >Your Status  </label><span className='required'>*</span><br/>
          <label>Single</label><br/>
          <input
          type='radio'
          name='status'
          value="single"
          onChange={formik.handleChange}
          checked={formik.values.status !== "" && formik.values.status !== "commited" }
          /><br/>
          <label>Commited</label><br/>
          <input
          type='radio'
          name='status'
          value="commited"
          onChange={formik.handleChange}
          checked={formik.values.status !== "" && formik.values.status !== "single" }
          />
          {formik.touched.status && formik.errors.status && <p style={{color:"red"}}>{formik.errors.status}</p>}
        </div>

        <div className='field'>
          <label  >Country  </label><span className='required'>*</span>
          <select name='country' onChange={formik.handleChange} value={formik.values.country}  onBlur={formik.handleBlur}>
            <option value="">Select Country</option>
            <option value="india">India</option>
            <option value="pak">Pakistan</option>
            <option value="nepal">Nepal</option>
          </select>
          {formik.touched.country && formik.errors.country && <p style={{color:"red"}}>{formik.errors.country}</p>}
        </div>

        <button className='btn-add' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App