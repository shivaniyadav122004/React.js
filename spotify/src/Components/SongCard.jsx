import { Pause, Play } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSong, playAndPause } from '../features/songSlice'


const SongCard = ({elem}) => {
  const dispatch=useDispatch()
  let {currentSong,isPlaying}=useSelector((state)=>state.song)
 

  

  return (
    <div className='h-[15%]  bg-gray-400 flex items-center justify-between rounded-xl px-10 text-white '>
      <div className='flex  gap-10'>
      <div className='h-15 w-15 rounded-full overflow-hidden ' >
        <img  className='h-full w-full ' src="https://tse2.mm.bing.net/th/id/OIP.zKhsH7Nalg_Usw7H8xGxaAHaE8?pid=Api&P=0&h=220"></img>
      </div>
      <div>
        <h1 className='font-bold'>{elem.name}</h1>
        <h1>{elem.artist}</h1>
      </div>
      </div>

      {currentSong?.id === elem.id?
      (isPlaying?
        (  
        <div className='bg-black text-white rounded-full h-12 w-12 flex justify-center items-center' onClick={()=>dispatch(playAndPause())}>
         <Pause  />
      </div>
      ):( 
      <div className='bg-black text-white rounded-full h-12 w-12 flex justify-center items-center' onClick={()=>dispatch(playAndPause())}>
         <Play  />
      </div>
      )
      ):(
      <div className='bg-black text-white rounded-full h-12 w-12 flex justify-center items-center' onClick={()=>dispatch(addSong(elem))}>
         <Play  />
      </div>
      )
          }
     
    </div>
  )
}

export default SongCard