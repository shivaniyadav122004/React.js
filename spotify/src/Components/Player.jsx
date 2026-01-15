import { Pause, Play, SkipBack, SkipForward } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AllSongs from '../Data/SongsData'
import { addSong, playAndPause } from '../features/songSlice'
import moment from "moment"

const Player = () => {
  let songData=AllSongs
  let dispatch=useDispatch()

  const [currentTime,setCurrentTime]=useState(0)

  const [duration,setDuration]=useState(0)

  
   let audioRef=useRef()
   let {currentSong,isPlaying}=useSelector((state)=>state.song)

   const handleForward=()=>{
    if(currentSong.id+1===songData.length){
      let nextsong=songData[0]
      dispatch(addSong(nextsong))
      return
    }
    let nextsong=songData[currentSong?.id +1]
    dispatch(addSong(nextsong))

   }
   const handleBackward=()=>{
    if(currentSong.id ===songData[0].id){
      let prevsong=songData[songData.length-1]
      dispatch(addSong(prevsong))
      return
    }
    let prevsong=songData[currentSong?.id-1]
    dispatch(addSong(prevsong))

   }

   const handleUpdateTime=()=>{
    setCurrentTime(audioRef.current.currentTime)
    setDuration(audioRef.current.duration)
    
   }
   const handleSeekTime=(e)=>{
    let newTime=e.target.value 
    console.log(newTime)
    audioRef.current.currentTime=newTime
    setCurrentTime(newTime)


   }
   const formatTime=(time)=>{
    return moment.utc(time *1000).format("mm:ss")

   }

   useEffect(()=>{
    if(currentSong && isPlaying){
      audioRef.current.play()
    }
    else{
      audioRef.current.pause()
    }
   },[currentSong,isPlaying])

  return (
    <div className='h-full w-full bg-black text-white flex  items-center gap-20'>
      <div className='w-[20%] '>
        <h1 className='font-bold text-xl'>{currentSong?.name}</h1>
        <h1>{currentSong?.artist}</h1>
      </div>
      <div className='h-full w-[50%]  flex flex-col items-center justify-between  py-7'>
        <div className='flex gap-8 items-center justify-between'>
          <div onClick={handleBackward}><SkipBack /></div>
          {isPlaying?(<div onClick={()=>dispatch(playAndPause())}><Pause/></div>):(<div onClick={()=>dispatch(playAndPause())}><Play /></div>)}
          <div onClick={handleForward}><SkipForward /></div>
        </div>
        <div className='flex text-white gap-5 justify-center items-center'>
          <h1>{formatTime(currentTime)}</h1>
          <div className='w-100 h-5 relative  rounded-full bg-white'>
            <input min={"0"} max={duration || 0} value={currentTime} onChange={handleSeekTime} type='range' className='  absolute h-full w-full'></input>
          </div>
          <h1>{formatTime(duration)}</h1>
        </div>
      </div>
      <audio  onTimeUpdate ={handleUpdateTime} ref={audioRef}  src={currentSong?.src}>

      </audio>
    </div>
  )
}

export default Player