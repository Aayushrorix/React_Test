import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav style={{padding:"5px 0px 50px 0px",backgroundColor:"lightcyan"}}>
                <Link style={{backgroundColor:"#7abd28",color:"white",padding:"5px",float:"left",marginLeft:"15px"}} to='/' className="navbar-brand">Home</Link>
                <Link style={{backgroundColor:"#3464eb",color:"white",padding:"5px",float:"right"}} to='/add' className="navbar-brand">Add New User</Link>
            </nav>
        </div>
    )
}

export default Header;