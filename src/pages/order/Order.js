import React from 'react';
import './style.scss'
import { useValue } from '../../context/useContext'

const Order = () => {

    // const allTotalOrder = 

    const { allOrder, totalPrice } = useValue();
    // console.log("allorder", allOrder)

    return (
        <div className="orders">
            <div className="container">
                <div className="heading">
                    <h2>Your Orders</h2>
                </div>
                {allOrder.map((list, i) => (
                    <>
                        <div key={i}>
                            <div className="date">
                                <h5>Ordered On:- {list.date}
                                </h5>
                            </div>
                            <div className="table">
                                <table >
                                    <thead>
                                        <th>title</th>
                                        <th>price</th>
                                        <th>Quentity</th>
                                        <th>total Price</th>
                                    </thead>
                                    <tbody>
                                        {list.order.map((item, index) => {
                                            const { title, price, qty } = item;
                                            const prices = Math.floor(price)
                                            return (
                                                <>
                                                    <tr key={index} >
                                                        <th>{title}</th>
                                                        <th>₹ {prices}</th>
                                                        <th>{qty}</th>
                                                        <th>₹ {prices * qty}</th>
                                                    </tr>


                                                </>

                                            )
                                        })}
                                    </tbody>
                                    {/* <tfoot>
                                        <tr >
                                            <td colSpan='3'>Total</td>
                                            <td colSpan='1'>
                                                &#x20B9; {" "}
                                                
                                            </td>
                                        </tr>
                                    </tfoot> */}
                                </table>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default Order
