import React from 'react'
import { useContext } from 'react'
import { MyData } from '../Context/Context'
import { Minus,X } from 'lucide-react'



const Recyle = () => {
 let {recyclewindow,setRecyclewindow}=useContext(MyData)
  

  const handleCross=()=>{
    setRecyclewindow(false)
    
  }

  return (
    <div>
      {recyclewindow?( <div className='h-100 w-170 bg-white absolute top-10 left-130'>
      <div className='h-[10%] w-full bg-blue-300 flex gap-5 pl-150 pt-2'>
          <Minus />
           <X onClick={handleCross}/>
        </div>
      <div className='bg-white  p-20 text-center text-2xl'>Recycle......</div>
    </div>):""}
    </div>
   
  )
}


export default Recyle