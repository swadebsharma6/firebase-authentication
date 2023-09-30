import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";


export const AuthContext  = createContext(null);

   const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    
    const[user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
      return  createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser =(email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const signInWithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

   

    // Observer Auth state
    
    useEffect(()=>{
    const unsubscribe =    onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('observe CU', currentUser);
            setLoading(false);
        });

        return ()=>{
            unsubscribe();
        }

    }, [])



    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle
    }
    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;

AuthProvider.propTypes = {
    
    children: PropTypes.node,
}
