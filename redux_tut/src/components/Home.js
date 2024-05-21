import React from 'react';

const Home = () => {
    return(
        <div>
            <div className='add-to-cart'>
                <img src="./cart.png"></img>
            </div>
            <h1>Home Component</h1>
            <div className='cart-wrapper'>
                <div className="img-wrapper item">
                    <img src="/Apple-iPhone-15-Pro-Max.jpg" alt="Apple-iPhone-15-Pro-Max"></img>
                </div>
                <div className="text-wrapper item">
                    <div>
                        iPhone 15 Pro Max
                    </div>  
                    <div>
                        Price: $1000.00
                    </div>
                </div>
                <div className="btn-wrapper item">
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;