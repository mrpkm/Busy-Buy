import React from 'react'
import './style.scss';
import { useValue } from '../../context/useContext'
import { useNavigate } from 'react-router-dom';

const Buy = () => {
    const naviage = useNavigate();
    const { cart, buyNow, totalPrice, order } = useValue();

    
    return (
        <>

            <>
                <div className="filter">
                    <div className='container'>
                        <div className="totalPrice">
                            <h3 >Total = {Math.floor(totalPrice)}</h3>
                            <button onClick={() => {
                                naviage('/buy')
                                buyNow(cart)
                            }}
                            >Buy Now</button>
                        </div>
                    </div>
                </div>

            </>
            {/* ) */}
            {/* })} */}
        </>
    )
}

export default Buy
