import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useQuery} from '@tanstack/react-query'
import { fetchProducts } from '../apis/productsApis'
import { getProductApisHook } from '../customHook/useProductApisHook'

const Home = () => {
  

  const {data,isPending}=getProductApisHook()
  if(isPending){
    return <h1>Loading......</h1>
  }

  console.log(data)
  
  
  

  

  return (
    <div>
       {data?.map((elem)=>{
        return <div className='flex gap-5 p-3'>
          <h1>{elem.id}</h1>
          <h1>{elem.title}</h1>
        </div>
       })}
    </div>
   
  )
}

export default Home