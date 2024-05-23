import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'
import { Link } from 'react-router-dom';

const Add = () => {

    const dispatch = useDispatch();
    const {userEntry,countIncrement} = bindActionCreators(actionCreators, dispatch);
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [dob, setDob] = useState('')
    const cc = useSelector(state => state.currentCount)

    function addUser(){
        const user = {name:name,email:email,mobile:mobile,dob:dob}

        userEntry(user,cc)
        countIncrement(cc)

        setName("")
        setEmail("")
        setMobile("")
        setDob("")
    }

    return (
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
            <button disabled={name==="" || email==="" || mobile==="" || dob===""} onClick={()=>{addUser()}}> Add </button>
            <button  ><Link to='/'>Cancle</Link></button>


            
            
        </div>
    );
}

export default Add;