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
        // countIncrement(cc)

        navigate('/');
    }

    function EditUser(userId,name, email, mobile, dob){
        userEdit(userId,{name:name, email:email, mobile:mobile, dob:dob})
    }

    return (
        <div style={{margin:"0% 25%"}}>
            

        
        <form style={{border:"1px solid black",backgroundColor:"lightblue"}}>
            {type === "add" ? (
            <h1 style={{margin:"15px"}}>Add</h1>
            ) : (
                <h1 style={{margin:"15px"}}>Edit</h1>
            )}

            {/* <hr/> */}
            <div  style={{margin:"20px 100px"}}>
                <label  style={{float:"left",marginBottom:"3px"}}>Name : </label><span style={{color:"red",float:"left"}}>*</span>
                <input type="text" className="form-control" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>

            <div  style={{margin:"20px 100px",marginBottom:"8px"}}>
                <label style={{float:"left"}}>Email : </label><span style={{color:"red",float:"left"}}>*</span>
                <input type="email" className="form-control" placeholder='exp@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div  style={{margin:"20px 100px",marginBottom:"8px"}}>
                <label style={{float:"left"}}>Mobile : </label><span style={{color:"red",float:"left"}}>*</span>
                <input type="number"  maxLength={10} className="form-control" placeholder="1234567890" value={mobile} onChange={(e) => {
                    if (/^\d{0,10}$/.test( e.target.value)) {
                        setMobile(e.target.value);
                    }
                }}/>
            </div>

            <div  style={{margin:"20px 100px",marginBottom:"8px"}}>
                <label style={{float:"left"}}>DOB : </label><span style={{color:"red",float:"left"}}>*</span>
                <input type="date" className="form-control" value={dob} onChange={(e) => setDob(e.target.value)}/>
            </div>

            {/* <hr/> */}

            {type === "add" ? (
                <div style={{margin:"30px"}}>
                    <button style={{margin:"2px",padding: "2px 35px",border:"none",backgroundColor:"#3464eb", color:"white"}} disabled={name==="" || email==="" || mobile==="" || dob===""} onClick={addUser}> Add </button>
                    <button style={{margin:"2px",padding: "2px",border:"none",backgroundColor:"#c3c4c0"}} ><Link  style={{ padding: "0px 30px",textDecoration:"none",color:"black"}} to='/'>Cancle</Link></button>
                </div>
                ) : (
                <div style={{margin:"30px"}}>
                    <button style={{ margin:"2px",padding:"3px",border:"none",backgroundColor:"#3464eb", color:"white"}} disabled={name==="" || email==="" || mobile==="" || dob===""} onClick={()=>{EditUser(userId,name, email, mobile, dob)}}> <Link style={{ padding: "0px 30px",textDecoration:"none",backgroundColor:"#3464eb", color:"white"}} to='/'>Save</Link> </button>
                    <button style={{ margin:"2px",padding:"3px",border:"none",backgroundColor:"#c3c4c0"}} ><Link style={{padding: "0px 30px", textDecoration:"none",color:"black"}} to='/'>Cancle</Link></button>
                </div>
                )}
        </form>
        </div>
    )
}

export default Form;