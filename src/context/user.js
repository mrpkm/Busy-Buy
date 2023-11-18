import { createContext, useContext, useEffect, useState } from 'react'
import { app,  auth} from '../firebase'
import { toast } from 'react-toastify'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

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
    // const navigate = useNavigate();



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

   

    return (
        <userContext.Provider value={{ email, setEmail, password, setPassword, name, setName, user, setUser,}}>
            {children}
        </userContext.Provider>
    )
}

export default UserContumContext;
export { userContext, useUserAuth }