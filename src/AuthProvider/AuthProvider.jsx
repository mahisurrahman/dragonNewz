import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './../firebase/firebase.config';
import { useEffect } from "react";



export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    //Creating User with Email and Password//
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Log In User//
    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }


    //Loging Out User//
    const logOut = ()=>{
        return signOut(auth);
    }


    //Saving user State on Firebase//
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
        });
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        logOut,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};



export default AuthProvider;