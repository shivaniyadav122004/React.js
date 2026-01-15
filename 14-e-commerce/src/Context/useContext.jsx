import { createContext, useState } from "react";

export let MyStore=createContext()

export const MyProvider=({children})=>{

   const [products,setProducts]=useState(()=>{
    return JSON.parse(localStorage.getItem("data"))||[]
   })

   const [cartItems,setCartItems]=useState(()=>{
    return JSON.parse(localStorage.getItem("cartdata"))||[]
   })
   console.log(cartItems)

   let [count,setCount]=useState(0)

  return <MyStore.Provider value={{products,setProducts,cartItems,setCartItems,count,setCount}}>
    {children}
  </MyStore.Provider>

}