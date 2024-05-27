import {Link} from 'react-router-dom';
import '../css/header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <Link className='home-link' to='/'>Home</Link>
                <Link className='add-link' to='/add'>Add New User</Link>
            </nav>
        </div>
    )
}

export default Header;