import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'
import {Link} from 'react-router-dom';


function Home() {
  const dispatch = useDispatch();
  const {userRemove} = bindActionCreators(actionCreators, dispatch);

  const users = useSelector(state => state.table)
  const uids = Object.keys(users)

  function UserDelete(key){
    userRemove(key)
  }

  return (
    <div style={{alignContent:"center"}}>
    <table  style={{borderColor: "black",margin:"5% auto"}}>
        <thead style={{backgroundColor:"#3de0b5"}}>
            <tr>
                <th style={{border:" 1px solid black",padding:"15px"}}>Name</th>
                <th style={{border:" 1px solid black",padding:"15px"}}>Email</th>
                <th style={{border:" 1px solid black",padding:"15px"}}>Mobile</th>
                <th style={{border:" 1px solid black",padding:"15px"}}>DOB</th>
                <th style={{border:" 1px solid black",padding:"15px"}}>action</th>
            </tr>
        </thead>
      <tbody style={{backgroundColor:"#3dc9db"}}>
        {uids.reverse().map(key => (
                    
                  <tr key={key}>
                      <td style={{border:" 1px solid black",padding:"5px 20px"}}>{users[key].name}</td>
                      <td style={{border:" 1px solid black",padding:"5px 20px"}}>{users[key].email}</td>
                      <td style={{border:" 1px solid black",padding:"5px 20px"}}>{users[key].mobile}</td>
                      <td style={{border:" 1px solid black",padding:"5px 20px"}}>{users[key].dob}</td>
                      <td style={{border:" 1px solid black",padding:"5px 20px"}}>
                        <button style={{border:"none",borderRadius:"15px",margin:"2px",marginRight:"10px",backgroundColor:"#3464eb", color:"white"}} ><Link to={`/edit/${key}`} style={{ padding: "0px 3px",textDecoration:"none",backgroundColor:"#3464eb", color:"white"}}>Edit</Link></button>
                        <button style={{border:"none",borderRadius:"15px", margin:"2px",marginLeft:"10px",backgroundColor:"#ed1334", color:"white"}} onClick={()=>{UserDelete(key)}}>Delete</button>
                      </td>
                  </tr>
                  
                ))}
        {Object.keys(users).length === 0 ? (
          <tr className="cart-wrapper">
            <td colSpan="5" style={{border:" 1px solid black",margin:"10px",padding:"5px 230px"}}>No Data</td>
          </tr>
        ) : (
          <tr >
          </tr>
        )}
      </tbody>
    </table>
    </div>
  );
}

export default Home;