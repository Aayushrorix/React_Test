import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link style={{backgroundColor:"#7abd28",color:"white",padding:"5px"}} to='/' className="navbar-brand">Home</Link>
                <Link style={{backgroundColor:"#3464eb",color:"white",padding:"5px"}} to='/add' className="navbar-brand">Add New User</Link>
            </nav>
        </div>
    )
}

export default Header;