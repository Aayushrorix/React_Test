import { useSelector } from "react-redux"
import { Link } from 'react-router-dom';
const Header = () => {

    const cartCount = useSelector(state => state.cart.length)

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/' className="navbar-brand">Amazon.in</Link>
                <Link to="/cart">
                    <form className="add-to-cart">
                        <img src=".\shopping-cart.png" alt='IMG'/>
                        <span style={{
                                backgroundColor:"orange",
                                position: 'absolute',
                                top: '10%',
                                right: '20px',
                                transform: 'translate(50%, -50%)'
                            }}>{cartCount}</span>
                    </form>
                </Link>
            </nav>
        </div>
    )
}

export default Header