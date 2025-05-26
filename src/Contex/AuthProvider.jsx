import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';


const AuthProvider = ({children}) => {
    const [loading , setLoading] = useState(false)
    const [user , setUser] = useState(null)

    // register user
    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login User
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // google 
    const provider = new GoogleAuthProvider();
    const googleAccount = () => {
        return signInWithPopup(auth, provider)
    }


    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unSubscribe()
        }
    }, [])
    

    const  userInfo ={
        user, 
        loading, 
        setLoading,
        createUser,
        loginUser, 
        googleAccount
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;