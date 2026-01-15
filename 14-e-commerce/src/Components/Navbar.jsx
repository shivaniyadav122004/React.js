import React, { useContext, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router'
import {User} from "lucide-react"
import { ShoppingCart } from 'lucide-react'
import { MyStore } from '../Context/useContext'

const Navbar = () => {

  let {cartItems,setCartItems,count}=useContext(MyStore)
 

  return (
    <div className='flex justify-between p-4 bg-pink-900 text-xl text-white font-bold '>
      <h1>E-COMMERCE</h1>
      <div className='flex gap-10'>
        <Link to="/products">PRODUCT</Link>
        <Link to="/carts" className='flex gap-2'>CART 
        <div className='flex gap-1'><ShoppingCart /> <sup className='text-xl'>{count}</sup></div>
        </Link>
       
      </div>
      <h1><User /></h1>
      <Outlet></Outlet>

    </div>
  )
}

export default Navbar