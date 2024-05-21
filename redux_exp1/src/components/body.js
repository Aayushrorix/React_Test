import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'

const Body = () => {
    const dispatch = useDispatch();
    const {addItem,removeItem} = bindActionCreators(actionCreators, dispatch);
    const cartCount = useSelector(state => state.cart.length)
    const cart = useSelector(state => state.cart)

    const items = {
        i1: { name: "iPhone 15 Pro Max", imgPath: "/Apple-iPhone-15-Pro-Max.jpg", price: 130000 },
        i2: { name: "Samsung S24 Ultra", imgPath: "/s24_ultra.jpg", price: 150000 }
    };

    // Create an array of item keys
    const itemKeys = Object.keys(items);

    // console.log(cartCount)
    
    return (
        <>
            {itemKeys.map(key => (
                <div key={key} className="cart-wrapper">
                    <div className="item">
                        <div className="img-wrapper">
                            <img src={items[key].imgPath} alt={items[key].name} />
                        </div>
                    </div>
                    <div className="item">
                        <h6>{items[key].name}</h6>
                    </div>
                    <div className="item">
                        <h6>{items[key].price} ₹</h6>
                        <div>
                            <button disabled={cart.includes(key)} onClick={()=>{addItem(key)}}> Add To Cart </button>
                            <button disabled={!cart.includes(key)} onClick={()=>{removeItem(key)}}> Remove from Cart </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Body