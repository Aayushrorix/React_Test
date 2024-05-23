import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'
import { useParams,Link } from 'react-router-dom';



const Edit = () => {

    const users = useSelector(state => state.table)
    const { userId } = useParams();
    const user = users[userId];

    console.log("USER ->>>>>>>>>> ",user)

    const dispatch = useDispatch();
    const {userEdit} = bindActionCreators(actionCreators, dispatch);

    const [name,setName] = useState(user.name)
    const [email,setEmail] = useState(user.email)
    const [mobile, setMobile] = useState(user.mobile)
    const [dob, setDob] = useState(user.dob)
    const cc = useSelector(state => state.currentCount)

    function EditUser(userId,name, email, mobile, dob){
        userEdit(userId,{name:name, email:email, mobile:mobile, dob:dob})
    }

    return(
        <div>
            <div>
                <label>Name : </label>
                <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>

            <div>
                <label>Email : </label>
                <input placeholder='exp@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div>
                <label>Mobile : </label>
                <input placeholder='1234567890' value={mobile} onChange={(e) => setMobile(e.target.value)}/>
            </div>

            <div>
                <label>DOB : </label>
                <input placeholder='00/00/0000' value={dob} onChange={(e) => setDob(e.target.value)}/>
            </div>

            <hr/>          
            <button style={{ margin:"2px",backgroundColor:"#3464eb", color:"white"}} onClick={()=>{EditUser(userId,name, email, mobile, dob)}}> <Link style={{ textDecoration:"none",backgroundColor:"#3464eb", color:"white"}} to='/'>Save</Link> </button>
            <button style={{ margin:"2px",backgroundColor:"#c3c4c0"}} ><Link style={{ textDecoration:"none",color:"black"}} to='/'>Cancle</Link></button>
        </div>
    )
}


export default Edit;