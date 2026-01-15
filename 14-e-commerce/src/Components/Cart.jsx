import React, { useContext } from 'react'
import { MyStore } from '../Context/useContext'
import Cards from '../pages/Cards'

const Cart = () => {
   
  let {cartItems}=useContext(MyStore)
   
  return (
    <div className='flex flex-wrap gap-3 p-4'>
      {cartItems.map((elem)=>{
        return  <div className='h-80 w-70 rounded bg-gray-400 p-3'>
             <img className='h-50 w-60 rounded ' src={elem.image}></img>
             <h1>Category: {elem.category}</h1>
              <h1>Price: {elem.price}</h1>
           <div className='flex justify-between m-2'>
        
            <button className='border rounded  p-1 bg-green-600'>BUY NOW</button>
            <div className='border rounded px-3  py-1  gap-3 flex bg-white'>
              <button>+</button>
              <button>quantity</button>
              <button>-</button>
            </div>
      </div>
      
    </div>
      })}
    </div>
  )
}

export default Cart