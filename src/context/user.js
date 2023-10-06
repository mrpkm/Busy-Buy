import { createContext, useContext, useEffect, useState } from 'react'
import { app } from '../firebase'
import { toast } from 'react-toastify'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'

const userContext = createContext();

const useUserAuth = () => {
    const userAuth = useContext(userContext);
    return userAuth;
}


const UserContumContext = ({ children }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [user, setUser] = useState(null);


    // making instante
    const auth = getAuth(app)

    const handleSignUp = (email, passsword) => {
        try {
            createUserWithEmailAndPassword(auth, email, passsword)
            toast.success('Sign Up Successfull  !!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
        }
        catch (err) {
            console.log("err", err)
            toast.error('Some Thing went wrong  !!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
        }

    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            try {
                if (user) {
                    setUser(user)
                } else {
                    setUser(null)
                }
            } catch (err) {
                console.log("err", err)
            }

        })
    }, [])

    const handleSingIn = (email, password) => {
        try {
            signInWithEmailAndPassword(auth, email, password)
            console.log("successful sing in")
            toast.success('Sign In Successfull  !!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
        } catch (err) {
            console.log('err', err)
            toast.error('Some went Wrong  !!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
        }
    }



    return (
        <userContext.Provider value={{ handleSignUp, email, setEmail, password, setPassword, name, setName, user, setUser, auth, handleSingIn }}>
            {children}
        </userContext.Provider>
    )
}

export default UserContumContext;
export { userContext, useUserAuth }