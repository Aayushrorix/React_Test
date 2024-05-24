import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'
import { useParams,Link,useNavigate  } from 'react-router-dom';


const Form = ({type}) => {

    const users = useSelector(state => state.table)
    const { userId } = useParams();
    const user = users[userId];

    const dispatch = useDispatch();
    const {userEntry,countIncrement,userEdit} = bindActionCreators(actionCreators, dispatch);

    const [name,setName] = useState(user?user.name:'')
    const [email,setEmail] = useState(user?user.email:'')
    const [mobile, setMobile] = useState(user?user.mobile:'')
    const [dob, setDob] = useState(user?user.dob:'')

    const navigate = useNavigate();
    
    const cc = useSelector(state => state.currentCount)

    function addUser(){
        const user = {name:name,email:email,mobile:mobile,dob:dob}

        userEntry(user,cc)
        countIncrement(cc)

        navigate('/');
    }

    function EditUser(userId,name, email, mobile, dob){
        userEdit(userId,{name:name, email:email, mobile:mobile, dob:dob})
    }

    return (
        <>
            <div>
                <label>Name : </label><span style={{color:"red"}}>*</span>
                <input type="text" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>

            <div>
                <label>Email : </label><span style={{color:"red"}}>*</span>
                <input type="email" placeholder='exp@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div>
                <label>Mobile : </label><span style={{color:"red"}}>*</span>
                <input type="number" placeholder="1234567890" value={mobile} onChange={(e) => setMobile(e.target.value)}/>
            </div>

            <div>
                <label>DOB : </label><span style={{color:"red"}}>*</span>
                <input type="date" value={dob} onChange={(e) => setDob(e.target.value)}/>
            </div>

            <hr/>

            {type === "add" ? (
                <>
                    <button style={{margin:"2px",padding: "0px 30px",border:"none",backgroundColor:"#3464eb", color:"white"}} disabled={name==="" || email==="" || mobile==="" || dob===""} onClick={addUser}> Add </button>
                    <button style={{margin:"2px",border:"none",backgroundColor:"#c3c4c0"}} ><Link  style={{ padding: "0px 30px",textDecoration:"none",color:"black"}} to='/'>Cancle</Link></button>
                </>
                ) : (
                <>
                    <button style={{ margin:"2px",border:"none",backgroundColor:"#3464eb", color:"white"}} disabled={name==="" || email==="" || mobile==="" || dob===""} onClick={()=>{EditUser(userId,name, email, mobile, dob)}}> <Link style={{ padding: "0px 30px",textDecoration:"none",backgroundColor:"#3464eb", color:"white"}} to='/'>Save</Link> </button>
                    <button style={{ margin:"2px",border:"none",backgroundColor:"#c3c4c0"}} ><Link style={{padding: "0px 30px", textDecoration:"none",color:"black"}} to='/'>Cancle</Link></button>
                </>
                )}
        </>
    )
}

export default Form;