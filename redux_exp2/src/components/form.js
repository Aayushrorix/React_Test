import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'
import { useParams,Link,useNavigate  } from 'react-router-dom';
import '../css/form.css'


const Form = ({type}) => {

    const users = useSelector(state => state.table)
    const { userId } = useParams();
    const user = users[userId];

    const dispatch = useDispatch();
    const {userEntry,userEdit} = bindActionCreators(actionCreators, dispatch);

    const [name,setName] = useState(user?user.name:'')
    const [email,setEmail] = useState(user?user.email:'')
    const [mobile, setMobile] = useState(user?user.mobile:'')
    const [dob, setDob] = useState(user?user.dob:'')

    const navigate = useNavigate();

    function addUser(){
        const user = {name:name,email:email,mobile:mobile,dob:dob}

        userEntry(user)

        navigate('/');
    }

    function EditUser(userId,name, email, mobile, dob){
        userEdit(userId,{name:name, email:email, mobile:mobile, dob:dob})
    }

    return (
        <div className='div-form'>

        <form>
            {type === "add" ? (
            <h1 className='from-heading'>Add</h1>
            ) : (
                <h1 className='from-heading'>Edit</h1>
            )}

            {/* <hr/> */}
            <div  className='field'>
                <label  >Name  </label><span className='required'>*</span>
                <input type="text"  placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>

            <div  className='field'>
                <label >Email  </label><span className='required'>*</span>
                <input type="email"  placeholder='exp@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div  className='field'>
                <label >Mobile  </label><span className='required'>*</span>
                <input type="number"  maxLength={10}  placeholder="1234567890" value={mobile} onChange={(e) => {
                    if (/^\d{0,10}$/.test( e.target.value)) {
                        setMobile(e.target.value);
                    }
                }}/>
            </div>

            <div  className='field'>
                <label >DOB  </label><span className='required'>*</span>
                <input type="date" value={dob} onChange={(e) => setDob(e.target.value)}/>
            </div>

            {/* <hr/> */}

            {type === "add" ? (
                <div className='add-edit-cancel'>
                    <button className='btn-add' disabled={name==="" || email==="" || mobile==="" || dob===""} onClick={addUser}> Add </button>
                    <button className='btn-cancel' ><Link className='link' to='/'>Cancle</Link></button>
                </div>
                ) : (
                <div className='add-edit-cancel'>
                    <button className='btn-save' disabled={name==="" || email==="" || mobile==="" || dob===""} onClick={()=>{EditUser(userId,name, email, mobile, dob)}}> <Link className='link' to='/'>Save</Link> </button>
                    <button className='btn-cancel' ><Link className='link' to='/'>Cancle</Link></button>
                </div>
                )}
        </form>
        </div>
    )
}

export default Form;