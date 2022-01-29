import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import firebaseInitialize from '../firebase/firebase.init';
firebaseInitialize()
const useFirebase = () => {
    const [user, setUser] = useState([]);
    const  [isLoading, setIsLoading] = useState(false);
    const Googleprovider = new GoogleAuthProvider();
    const auth = getAuth()
    const singinwithGoogle = () =>{
        setIsLoading(true)
        signInWithPopup(auth, Googleprovider)
        .then(result => {
            setUser(result.user)
            console.log(result.user)
            adduser(result.user.email, result.user.displayName)
        })
        .finally(()=> setIsLoading(false))
    }
           // log out user
           const Logout = ()=>{
            setIsLoading(true)
                signOut(auth)
                .then(()=>{
                    setUser({})
                })
                .finally(()=> setIsLoading(false))
            }
            useEffect(()=>{
                onAuthStateChanged(auth, user =>{
                    if (user) {
                        setUser(user)
                      } 
                      else {
                        setUser({})
                    }
                      setIsLoading(false)
                })
            },[])

            const adduser = (email, name) =>{
                const user ={email, name, staus: "normal"};
                fetch('http://localhost:5000/users',{
                    method: 'PUT',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body:JSON.stringify(user)
                })
            }
      
    return{
        singinwithGoogle,
        user,
        Logout,
        isLoading,
        setIsLoading
    };
};

export default useFirebase;