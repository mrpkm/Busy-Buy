import React from 'react'
import { useValue } from '../../context/useContext'
import { useNavigate } from 'react-router-dom';

const Buy = () => {
    const naviage = useNavigate();
    const { cart, buyNow, totalPrice, order } = useValue();

    const h3Style = {
        fontSize: '1.6rem',
        color: 'red',
        marginBottom: '7px',
        textAlign: 'center'

    }
    const btnss = {
        padding: '6px 10px',
        fontSize: '1.2rem'
    }

    return (
        <>

            <>
                <div className="filter">
                    <div className='container'>
                        <div className="totalPrice">
                            <h3 style={h3Style}>Total = {Math.floor(totalPrice)}</h3>
                            <button onClick={() => {
                                naviage('/buy')
                                buyNow(cart)
                            }}
                                style={btnss}>Buy Now</button>
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
