import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/' className="navbar-brand">Home</Link>
                <Link to='/add' className="navbar-brand">Add New User</Link>
            </nav>
        </div>
    )
}

export default Header;