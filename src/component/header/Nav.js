import React, { useState } from 'react';
import './style.scss'
import { FcHome } from 'react-icons/fc'
import { BsFillBagHeartFill } from 'react-icons/bs'
import { TbLogout2, TbShoppingCartFilled } from 'react-icons/tb'
import { RiLoginCircleFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../context/user';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify'
import { useValue } from '../../context/useContext';
import { FaBars, FaHome, FaSignInAlt, FaStore } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai';
import { auth } from '../../firebase'



const Nav = () => {
  const navigate = useNavigate();
  const { user } = useUserAuth()
  const { redTotal } = useValue();
  const [showNav, setShowNav] = useState(false);


  return (
    <div className="navbar">
      <div className="logo">
        <h3 onClick={() => navigate('/')}>Busy Buy </h3>
      </div>


      <li className='menubar' onClick={(e) => setShowNav(!showNav)}>
        {showNav ?
          <span className='close' >
            <AiOutlineClose />
          </span>
          :
          <span className='menu'>
            <FaBars />
          </span>
        }
      </li>

      <div className={`nav ${showNav ? "open-nav" : " "}`}>
        <li onClick={() => navigate('/')}><span><FaHome /></span> <span>home</span></li>
        <li onClick={() => navigate('/views')}><span><FaStore /></span> <span>product</span></li>

        {user ? (
          <>
            <li onClick={() => navigate('/buy')}><span><BsFillBagHeartFill /></span> <span>my order</span></li>
            <li className='cartCountnum' onClick={() => navigate('/cart')}><span><TbShoppingCartFilled /></span> <span>cart</span><strong className='cartTotal'>{redTotal}</strong></li>
            <li onClick={() => {
              signOut(auth)
              navigate('/signin')
<<<<<<< HEAD
              toast.success('Log Out Successfull  !!', {
=======
              toast.success('Log Out Successful  !!', {
>>>>>>> f12950d3873d749efa26c231c2d91482d0b56a33
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
              });
            }}>
              <span> <TbLogout2 /> </span>
              <span>logout</span></li>
          </>
        ) :
          <li onClick={
            () => navigate('/signin')
          }><span><FaSignInAlt /></span> <span>sign in</span></li>
        }
      </div>

    </div>
  )
}

export default Nav
