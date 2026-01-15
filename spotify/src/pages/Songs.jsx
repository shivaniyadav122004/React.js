import React from 'react'
import SongCard from '../Components/SongCard'
import AllSongs from '../Data/SongsData'

const Songs = () => {
  let songdata=AllSongs


  return (
    <div className='bg-black h-full w-full p-3 flex flex-col gap-4 overflow-auto' >
      {songdata.map((elem,indx)=>{
        return <SongCard key={indx} elem={elem}/>
      })}
    </div>
  )
}

export default Songs