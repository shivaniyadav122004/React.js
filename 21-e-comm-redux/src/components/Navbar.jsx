import React from 'react'
import {NavLink} from 'react-router'


const Navbar = () => {
  return (
    <div className='flex items-center justify-between border-b border-black p-4 text-xl '>
      <h1 className='font-bold'>Logo</h1>
      <div className='flex gap-8 font-semibold'>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/users'>Users</NavLink>
        
      </div>
      <div className='flex gap-10 font-semibold'>
        <p>Profile</p>
        <p>Cart</p>
      </div>
    </div>
  )
}

export default Navbar   