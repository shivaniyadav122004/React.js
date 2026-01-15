import React, { useContext, useState } from 'react'
import { MyStore } from '../Context/useContext'

const Cards = ({elem}) => {

  let {products,setProducts,cartItems,setCartItems,count,setCount}=useContext(MyStore)



  const handleAddToCart=(e)=>{
      setCount(count+1)
     const filltereddata=products.find((val)=>elem.id===val.id)
     console.log(filltereddata)
     let updatedcartdata=[...cartItems,filltereddata]
     setCartItems(updatedcartdata)
     localStorage.setItem("cartdata",JSON.stringify(updatedcartdata))
    // alert("added in cart")
    
    
  
    

  }


  return (
    <div className='h-80 w-70 rounded-2xl border bg-gray-400 p-3 border-gray-600'>
      <img className='h-50 w-60 rounded object-cover ' src={elem.image}></img>
      <h1>Category: {elem.category}</h1>
      <h1>Price: {elem.price}</h1>
      <div className='flex justify-between m-2'>
         <button className='border rounded  p-1 bg-green-600 cursor-pointer' onClick={handleAddToCart}>ADD To Cart</button>
         <button className='border rounded p-1 bg-red-700 cursor-pointer'>DELETE</button>
      </div>
      
    </div>
  )
}

export default Cards