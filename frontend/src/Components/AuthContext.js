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

    const removeCart=(id)=>{
        setcart(prevCart=>prevCart.filter(item=>item._id!==id));
    }

    const increaseQuantity = (item) => {
        const updatedCart = cart.map(cartItem =>
            cartItem._id === item._id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
        setcart(updatedCart);

    };
    
    
    const decreaseQuantity = (item) => {
        const updatedCart = cart.map(cartItem =>
            cartItem._id === item._id && cartItem.quantity > 1
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        );
        setcart(updatedCart);
    };

return(
    <AuthContext.Provider value={{token,setToken,cart,addtocart,removeCart,increaseQuantity,decreaseQuantity}}>
        {children}
    </AuthContext.Provider>
)
}