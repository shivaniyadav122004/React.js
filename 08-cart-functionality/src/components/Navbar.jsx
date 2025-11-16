import React from 'react'

const Navbar = ({ cart,setCart}) => {

   const opencart=()=>{
    setCart((prev)=>!prev)
   }

   
  return (
    <div className='w-full h-20 bg-red-400 text-2xl flex justify-between p-3'>
      <h1 className=''>flipkart</h1>
      <div className='flex gap-4 '>
        <h1 onClick={opencart}>Cart</h1>
        <h1>Products</h1>
      </div>
    </div>
  )
}

export default Navbar