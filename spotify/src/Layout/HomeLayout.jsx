import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Player from '../Components/Player'

const HomeLayout = () => {
  return (
    <div className='h-screen w-full'>
      <Navbar/>
      <div className='h-[80%] flex p-4 '>
        <div className='w-[20%] border-r'>left</div>
        <div className='w-[60%] border-r'>
          <Outlet/>  
        </div>
        <div className='w-[20%]'>right</div>
      </div>
      <div className='h-[15%]'>
        <Player/>
      </div>
    </div>
  )
}

export default HomeLayout