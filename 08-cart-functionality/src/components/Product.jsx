import React from 'react'

const Product = ({elem,setItems}) => {

  const additems=()=>{
   setItems((prev)=>[...prev,elem])
   alert("succes")
  }
  
  return (
    
    <div className='bg-blue-200 h-70 w-70 m-5 border p-3 border-gray-600 flex flex-col '>
        <div className=' p-5 w-full ' >
          <img  className="h-30 w-full"   
          src={elem.image}></img>
        </div>
        <h1>{elem.name}</h1>
        <h1>{elem.price}</h1>
        <div className='flex justify-between p-3'>
          <button className='bg-green-400 text-lg p-1.5'>Buy now</button>
          <button className='bg-blue-400' onClick={additems}>Add to Cart</button>
        </div>
    </div>
  
  )
}

export default Product