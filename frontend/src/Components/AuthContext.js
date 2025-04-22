import React, { createContext, useEffect, useState } from 'react'

export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const[token,setToken]=useState(null)

    useEffect(()=>{
        const storedToken=localStorage.getItem("token");
        setToken(storedToken);
    },[])

    const[cart,setcart]=useState([]);

    const addtocart=(item)=>{
        setcart([...cart,item])
    }

    const removefromcart=(itemtoremove)=>{
        setcart(cart.filter((item)=>item._id!==itemtoremove._id))
    }

return(
    <AuthContext.Provider value={{token,setToken,cart,addtocart,removefromcart}}>
        {children}
    </AuthContext.Provider>
)
}