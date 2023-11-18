import React from 'react'
import './style.scss'
import { useUserAuth } from '../../context/user'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'

const Register = () => {
  const { email, setEmail, password, setPassword, name, setName } = useUserAuth()
  const navigate = useNavigate()
  // console.log(userAuth)

  //SIGN UP
  const handleSignUp = async (email, password) => {
    // e.preventDefault()
    console.log("object")
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      await signInWithEmailAndPassword(auth, email, password);
      setName("");
      setEmail("");
      setPassword("");
      navigate("/");
      toast.success('Sign Up Successfull  !!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      console.log(auth.id)
      console.log(name, " ", email)
    }
    catch (err) {
      console.log("err", err)
      toast.error('Some Thing went wrong  !!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      console.log("fail")

    }

  }


  return (
    <div className="singIn">
      <div className="container" >
        {/* <div className="container" > */}
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
          {/* <button onClick={handleSignUp}>sumbit</button> */}
          <button onClick={(e) => handleSignUp(email, password)}>sumbit</button>
          {/* <button onClick={() => {

            handleSignUp(email, password)
            navigate('/')
          }
          }>sumbit</button> */}
        </div>
      </div>
    </div>
  )
}

export default Register


