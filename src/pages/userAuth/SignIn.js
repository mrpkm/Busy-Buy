import React from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../context/user'

const SignIn = () => {
    const { handleSingIn, email, setEmail, password, setPassword } = useUserAuth();
    const navigate = useNavigate();
    return (
        <div className="singIn">
            <div className="container">
                <div className="heading">
                    <h2>Sign In</h2>
                </div>
                <div className="boxes">
                    <div className="box">
                    </div>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter Email' />
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Enter Password' />
                    <button onClick={() => {
                        handleSingIn(email, password)
                        navigate('/')
                    }}>sumbit</button>
                    <h5 onClick={() => navigate('/register')}>or SignUp instead</h5>
                </div>
            </div>
        </div>
    )
}

export default SignIn
