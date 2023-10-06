import React from 'react'
import Buy from '../../component/buy/Buy'
import AddToCart from './addToCart/AddToCart'
import { useValue } from '../../context/useContext';

const Cart = () => {
    const center = {
        textAlign: 'center',
        marginTop: '5rem',
        color: 'red',
        fontSize: '3rem'
    }
    const {cart} = useValue()
    // console.log(cart)
    return (
        <div className="home">
            {cart.length !== 0 ? <>
                <div className="continer">
                    <div className="left">
                        <div className="filters">
                            <Buy />
                        </div>
                    </div>
                    <div className="items">
                        <AddToCart />

                    </div>
                </div>
            </> : <>
                <div style={center} className="cartIsEmpty">
                    <h2>Cart is Empty</h2>
                </div>
            </>}
        </div>
    )
}

export default Cart
