import React from 'react'
import Product from './Product'

const Cartpage = ({items}) => {

  
  return (
    <div className='bg-white flex flex-wrap h-300 w-full absolute top-20'>
     {items.length?(
      items.map((elem)=>{
        return <Product elem={elem}/>
      })):(
     <h1>no Items is added</h1>
      )
     }
    </div>
  )
}

export default Cartpage