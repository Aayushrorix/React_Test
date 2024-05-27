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
        <div style={{margin:"5% 25%"}}>
            

        
        <form style={{border:"1px solid black",borderRadius:"20px",backgroundColor:"#2a5e5a"}}>
            {type === "add" ? (
            <h1 style={{margin:"15px",color:"white",textAlign:"center"}}>Add</h1>
            ) : (
                <h1 style={{margin:"15px",color:"white",textAlign:"center"}}>Edit</h1>
            )}

            {/* <hr/> */}
            <div  style={{margin:"20px 10%",textAlign:"center"}}>
                <label  style={{width:"60px",margin:"0px 0px 3px 0px",color:"white"}}>Name  </label><span style={{color:"red"}}>*</span>
                <input style={{borderRadius: "20px",width:"80%", height:"38px"}}  type="text"  placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>

            <div  style={{margin:"20px 10%",textAlign:"center",color:"white"}}>
                <label style={{width:"60px",margin:"0px 0px 3px 0px"}}>Email  </label><span style={{color:"red"}}>*</span>
                <input style={{borderRadius: "20px",width:"80%", height:"38px"}} type="email"  placeholder='exp@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div  style={{margin:"20px 10%",textAlign:"center",color:"white"}}>
                <label style={{width:"60px",margin:"0px 0px 3px 0px"}}>Mobile  </label><span style={{color:"red"}}>*</span>
                <input style={{borderRadius: "20px",width:"80%", height:"38px"}} type="number"  maxLength={10}  placeholder="1234567890" value={mobile} onChange={(e) => {
                    if (/^\d{0,10}$/.test( e.target.value)) {
                        setMobile(e.target.value);
                    }
                }}/>
            </div>

            <div  style={{margin:"20px 10%",textAlign:"center",color:"white"}}>
                <label style={{width:"60px",margin:"0px 0px 3px 0px"}}>DOB  </label><span style={{color:"red"}}>*</span>
                <input style={{borderRadius: "20px",width:"80%", height:"38px"}} type="date" value={dob} onChange={(e) => setDob(e.target.value)}/>
            </div>

            {/* <hr/> */}

            {type === "add" ? (
                <div style={{margin:"30px",textAlign:"center"}}>
                    <button style={{margin:"2px",padding: "2px 35px",borderRadius:"10px",border:"none",backgroundColor:"#3464eb", color:"white"}} disabled={name==="" || email==="" || mobile==="" || dob===""} onClick={addUser}> Add </button>
                    <button style={{margin:"2px",padding: "2px",borderRadius:"10px",border:"2px soloid white",backgroundColor:"black"}} ><Link  style={{ padding: "0px 30px",textDecoration:"none",color:"white"}} to='/'>Cancle</Link></button>
                </div>
                ) : (
                <div style={{margin:"30px",textAlign:"center"}}>
                    <button style={{ margin:"2px",padding:"3px",borderRadius:"10px",border:"none",backgroundColor:"#3464eb", color:"white"}} disabled={name==="" || email==="" || mobile==="" || dob===""} onClick={()=>{EditUser(userId,name, email, mobile, dob)}}> <Link style={{ padding: "0px 30px",textDecoration:"none",backgroundColor:"#3464eb", color:"white"}} to='/'>Save</Link> </button>
                    <button style={{ margin:"2px",padding:"3px",borderRadius:"10px",border:"2px soloid white",backgroundColor:"black"}} ><Link style={{padding: "0px 30px", textDecoration:"none",color:"white"}} to='/'>Cancle</Link></button>
                </div>
                )}
        </form>
        </div>
    )
}

export default Form;