import React, { useContext } from 'react'
import { Minus ,X} from 'lucide-react'
import { MyData } from '../Context/Context'

const Files = () => {

  let {openfile,setOpenfile}=useContext(MyData)
  console.log(openfile)

  const handleCross=()=>{
    setOpenfile(false)
    
    
  }

  return (
    <div>
      {openfile?( <div className='h-100 w-170 bg-white absolute top-60 left-10'>
      <div className='h-[10%] w-full bg-green-300 flex gap-5 pl-150 pt-2'>
          <Minus />
           <X onClick={handleCross}/>
        </div>
      <div className='bg-white text-center p-20 text-2xl'>filess .....</div>
    </div>):""}
    </div>
   
  )
}

export default Files