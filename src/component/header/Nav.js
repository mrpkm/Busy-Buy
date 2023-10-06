import React, { useEffect, useState } from 'react';
import './style.scss'
import { FcHome } from 'react-icons/fc'
import { BsFillBagHeartFill } from 'react-icons/bs'
import { TbShoppingCartFilled } from 'react-icons/tb'
import { GrLogout } from 'react-icons/gr';
import { RiLoginCircleFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../context/user';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify'
import { useValue } from '../../context/useContext';


const Nav = () => {
  const navigate = useNavigate();
  const { user, auth } = useUserAuth()
  const { redTotal } = useValue();

  return (
    <div className="navbar">
      <div className="logo">
        <h3 onClick={() => navigate('/')}>Busy Buy </h3>
      </div>
      <div className="nav">
        <ul>
          <li onClick={() => navigate('/')}><span><FcHome /></span> <span>home</span></li>

          {user ? (
            <>
              <li onClick={() => navigate('/buy')}><span><BsFillBagHeartFill /></span> <span>my order</span></li>
              <li onClick={() => navigate('/cart')}><span><TbShoppingCartFilled /></span> <span>cart</span><strong className='cartTotal'>{redTotal}</strong></li>
              <li onClick={() => {
                signOut(auth)
                navigate('/signin')
                toast.success('Sign Up Successfull  !!', {
                  position: toast.POSITION.TOP_RIGHT,
                  autoClose: 2000,
                });
              }}><span></span> <GrLogout /><span>logout</span></li>
            </>
          ) :
            <li onClick={
              () => navigate('/signin')
            }><span></span> <RiLoginCircleFill /><span>sign in</span></li>
          }


        </ul>
      </div>
    </div>
  )
}

export default Nav
