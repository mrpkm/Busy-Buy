import React, { useState } from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../context/user'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { toast } from 'react-toastify'

const SignIn = () => {
    const { email, setEmail, password, setPassword } = useUserAuth();
    const navigate = useNavigate();
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState()
    // console.log("outside sign in ", email, " ", password)

    const handleSingIn = async ( email, password) => {
        // e.preventDefault()
        console.log("indisde sign in ", email, " ", password)
        console.log("object")
        try {
            await signInWithEmailAndPassword(auth, email, password)
            console.log("successful sing in")
            navigate('/')
            toast.success('Sign In Successfull  !!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
        } catch (err) {
            console.log("sing in fail")
            console.log('err', err)
            toast.error('Some went Wrong  !!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
        }
    }


    return (
        <div className="singIn">
            <div className="container">
            {/* <form className="container" onSubmit={(e) => handleSingIn(e)}> */}
                <div className="heading">
                    <h2>Sign In</h2>
                </div>
                <div className="boxes">
                    <div className="box">
                    </div>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
                    {/* <button type='submit'>sumbit</button> */}
                    <button onClick={()=> handleSingIn(email, password)} type='submit'>sumbit</button>
                    <h5 onClick={() => navigate('/register')}>or SignUp instead</h5>
                </div>
                </div>
            {/* </form> */}
        </div>
    )
}

export default SignIn
