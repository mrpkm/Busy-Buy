import React, { useState } from 'react';
import './style.scss'
import { useValue } from '../../context/useContext';
import { useUserAuth } from '../../context/user';
import { useNavigate } from 'react-router-dom';



const Item = () => {
    const { data, addToCart, filterData } = useValue();
    const { user } = useUserAuth();
    const navigate = useNavigate()
    return (
        <div className="item">
            {filterData.map((item, index) => {
                const { image, title, price, id, qty } = item;
                const sortTitle = title.slice(0, 17)
                return (
                    <div key={index} className="contaner-box">
                        <div className="image">
                            <img src={image} alt="img" />
                        </div>
                        <div className="title">
                            <h3>{sortTitle}</h3>
                        </div>
                        {/* <p>{id}</p> */}
                        <div className="price">
                            <h5> Rs {Math.round(price)}</h5>
                        </div>
                        <div className="btns">
                            <button onClick={() => {
                                if (user) {
                                    addToCart({ id, index, image, title, price, qty })
                                } else {
                                    navigate('/signin')
                                }
                            }

                            }>Add to Cart</button>
                        </div>
                    </div>
                )
            })}




        </div >
    )
}

export default Item
