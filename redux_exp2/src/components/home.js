import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'
import {Link} from 'react-router-dom';


function Home() {
  const dispatch = useDispatch();
  const {userRemove} = bindActionCreators(actionCreators, dispatch);

  const users = useSelector(state => state.table)
  const uids = Object.keys(users)
  const cc = useSelector(state => state.currentCount)

  function UserDelete(key,cc){
    userRemove(key,cc)
  }

  return (
    <div style={{alignContent:"center",margin:"5px 354px 0px 30px"}}>
    <table className='table table-bordered' style={{borderColor: "black"}}>
        <thead>
            <tr>
                <th style={{border:" 1px solid black"}}>Name</th>
                <th style={{border:" 1px solid black"}}>Email</th>
                <th style={{border:" 1px solid black"}}>Mobile</th>
                <th style={{border:" 1px solid black"}}>DOB</th>
                <th style={{border:" 1px solid black"}}>action</th>
            </tr>
        </thead>
      <tbody>
        {uids.reverse().map(key => (
                    
                  <tr key={key} className="cart-wrapper">
                      <td style={{border:" 1px solid black"}}>{users[key].name}</td>
                      <td style={{border:" 1px solid black"}}>{users[key].email}</td>
                      <td style={{border:" 1px solid black"}}>{users[key].mobile}</td>
                      <td style={{border:" 1px solid black"}}>{users[key].dob}</td>
                      <td style={{border:" 1px solid black"}}>
                        <button style={{border:"none",margin:"2px",marginRight:"20px",backgroundColor:"#3464eb", color:"white"}} ><Link to={`/edit/${key}`} style={{ padding: "0px 30px",textDecoration:"none",backgroundColor:"#3464eb", color:"white"}}>Edit</Link></button>
                        <button style={{padding: "2px 30px",border:"none", margin:"2px",marginLeft:"20px",backgroundColor:"#ed1334", color:"white"}} onClick={()=>{UserDelete(key,cc)}}>Delete</button>
                      </td>
                  </tr>
                  
                ))}
        {Object.keys(users).length === 0 ? (
          <tr className="cart-wrapper">
            <td style={{border:" 1px solid black",margin:"10px"}}>Null</td>
            <td style={{border:" 1px solid black"}}>Null</td>
            <td style={{border:" 1px solid black"}}>Null</td>
            <td style={{border:" 1px solid black"}}>Null</td>
            <td style={{border:" 1px solid black"}}>Null</td>
          </tr>
        ) : (
          <tr className="cart-wrapper disabled">
          </tr>
        )}
      </tbody>
    </table>
    </div>
  );
}

export default Home;