import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'
import {Link} from 'react-router-dom';
import '../css/home.css'


function Home() {
  const dispatch = useDispatch();
  const {userRemove} = bindActionCreators(actionCreators, dispatch);

  const users = useSelector(state => state.table)
  const uids = Object.keys(users)

  function UserDelete(key){
    userRemove(key)
  }

  return (
    <div className='div-table'>
    <table>
        <thead>
            <tr>
                <th >Name</th>
                <th >Email</th>
                <th >Mobile</th>
                <th >DOB</th>
                <th >action</th>
            </tr>
        </thead>
      <tbody>
        {uids.reverse().map(key => (
                    
                  <tr key={key}>
                      <td >{users[key].name}</td>
                      <td >{users[key].email}</td>
                      <td >{users[key].mobile}</td>
                      <td >{users[key].dob}</td>
                      <td >
                        <button className='btn-edit'><Link to={`/edit/${key}`} className='link-edit'>Edit</Link></button>
                        <button className='btn-delete' onClick={()=>{UserDelete(key)}}>Delete</button>
                      </td>
                  </tr>
                  
                ))}
        {Object.keys(users).length === 0 ? (
          <tr className="cart-wrapper">
            <td colSpan="5" className='nodata-td'>No Data</td>
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