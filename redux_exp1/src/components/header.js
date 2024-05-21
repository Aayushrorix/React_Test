import { useSelector } from "react-redux"
const Header = () => {

    const cartCount = useSelector(state => state.cart.length)

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h3 className="navbar-brand">1</h3>
                <h3 className="navbar-brand">2</h3> 
                <h3 className="navbar-brand">3</h3>
                <a href="/about">
                    <form className="add-to-cart">
                        <img src=".\shopping-cart.png" alt='IMG'/>
                        <span style={{
                                backgroundColor:"red",
                                position: 'absolute',
                                top: '10%',
                                right: '20px',
                                transform: 'translate(50%, -50%)'
                            }}>{cartCount}</span>
                    </form>
                </a>
            </nav>
        </div>
    )
}

export default Header