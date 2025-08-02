import React from 'react'
import { useState, useEffect } from 'react';
import AuthContext from './AuthContext'
import { isAuthenticatedAPI } from '../Services/AuthServices/isAuthenticatedAPI';

const AuthProviderWrapper = ({children}) => {

   // State to manage authentication status
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    // State to manage loading state while checking authentication
    const [loading, setLoading] = useState(true)

    // Function to check authentication status
    const authCheck = async()=>{
        const res = await isAuthenticatedAPI()
        setIsAuthenticated(res.success)
        setLoading(false)
    }

    // Effect to check authentication status on component mount
    useEffect(()=>{
        authCheck()
    },[])

  return (
    <>
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, loading, authCheck }}>
            {children} 
        </AuthContext.Provider>
    </>
  )
}

export default AuthProviderWrapper;
