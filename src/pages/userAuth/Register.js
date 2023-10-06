import React from 'react'
import './style.scss'
import { useUserAuth } from '../../context/user'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const { handleSignUp, email, setEmail, password, setPassword, name, setName } = useUserAuth()
  const navigate = useNavigate()
  // console.log(userAuth)

  return (
    <div className="singIn">
      <div className="container">
        <div className="heading">
          <h2>Sign Up</h2>
        </div>
        <div className="boxes">
          <div className="box">
          </div>
          <input type="text" onChange={(e) => setName(e.target.value)}
            value={name} placeholder='Enter Name' />
          <input type="email" onChange={(e) => setEmail(e.target.value)}
            value={email} placeholder='Enter Email' />
          <input type="password" onChange={(e) => setPassword(e.target.value)}
            value={password} placeholder='Enter Password' />
          <button onClick={() => {

            handleSignUp(email, password)
            navigate('/')
          }
          }>sumbit</button>
        </div>
      </div>
    </div>
  )
}

export default Register


