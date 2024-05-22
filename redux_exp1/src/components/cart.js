import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'

const Cart = () => {
    const dispatch = useDispatch();
    const {addItem,removeItem} = bindActionCreators(actionCreators, dispatch);
    // const cartCount = useSelector(state => state.cart.length)
    const cart = useSelector(state => state.cart)
    const items = useSelector(state => state.items)
    let final_price = 0

    const itemcart = [...new Set(cart)]
    for(let i of cart){
        final_price = final_price + items[i].price
    }
    // setFinalPrice(price)
    // console.log(cart)
    // console.log(items)

    return(
        <>
            {itemcart.map(key => (
                <>
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
                            <button  onClick={()=>{addItem(key)}}> + </button>
                            <button  onClick={()=>{removeItem(key)}}> - </button>
                        </div>
                    </div>
                    <span >Qty : {cart.filter(x=>x===key).length}</span><br/>
                    <span >price : {cart.filter(x=>x===key).length * items[key].price}</span>
                </div>
                </>
            ))}
            <hr/>
            <div >Final Price : {final_price}</div>
        </>
    )


}

export default Cart;