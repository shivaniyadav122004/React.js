import React from 'react'
import { useContext } from 'react'
import { MyData } from '../Context/Context'
import { Minus,X } from 'lucide-react'



const Terminal= () => {
 let {terminal,setTerminal}=useContext(MyData)
  

  const handleCross=()=>{
    setTerminal(false)
    
  }

  return (
    <div>
      {terminal?( <div className='h-100 w-170 bg-white absolute top-70 left-200'>
      <div className='h-[10%] w-full bg-purple-300 flex gap-5 pl-150 pt-2'>
          <Minus />
           <X onClick={handleCross}/>
        </div>
      <div className='bg-white  p-30 text-center text-2xl'>Terminal.....</div>
    </div>):""}
    </div>
   
  )
}


export default Terminal