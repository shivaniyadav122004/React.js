import React, { useEffect, useState } from 'react'
import { House } from 'lucide-react'
import AllSongs from '../Data/SongsData'

const Navbar = () => {

  let songs=AllSongs

  const [searchText,setSearchText]=useState("")

  const searchSongs=()=>{
    const searchedsong=songs.filter((val)=>val.name.toLowerCase().startsWith(searchText.toLowerCase()))
    console.log(searchedsong)
  }
  
 useEffect(()=>{
  searchSongs()
 },[searchText])
  return (
    <div className='h-[8%] bg-black text-white flex justify-between items-center p-3 text-2xl '>
      <div>Logo</div>
      <div className='flex gap-4 '>
        <div className='bg-gray-400 rounded-full h-10 w-10 flex items-center justify-center'> <House/></div>
        <input onChange={(e)=>setSearchText(e.target.value)} className='bg-gray-400 rounded-full px-4 flex items-center' type='text' placeholder='search here....'></input>
      </div>
      <div>
        <div className='rounded-full'>Profile</div>
      </div>
    </div>
  )
}

export default Navbar