import './style.scss'
import React, { useValue } from '../../../context/useContext'

const AddToCart = () => {
    const { cart, removeToCart, increaseQty, decreaseQuantity } = useValue()
    // console.log("cart", cart)
    
    return (
        <div className="items">

            {cart.map((item, index) => {
                const { image, title, price, id, qty } = item;
                const sortTitle = title.slice(0, 12)

                return (
                    <div key={index} className="ccontaner">
                        <div className="image">
                            <img src={image} alt="img" />
                        </div>
                        <div className="title">
                            <h3>{sortTitle}...</h3>
                        </div>
                        <div className="price">
                            <h5> Rs {Math.floor(price)}</h5>
                        </div>
                        <div className="counts">
                            <button onClick={() => decreaseQuantity(id)}>-</button>
                            <button>{qty}</button>
                            <button onClick={() => increaseQty(id)}>+</button>
                        </div>
                        <div className="btns">
                            <button onClick={() => removeToCart(id)} className='remvoeBtn'>Remove From Cart</button>
                        </div>

                    </div>
                )
            })}


        </div>
    )
}



export default AddToCart
