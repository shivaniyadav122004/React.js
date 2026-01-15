import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import Cards from '../pages/Cards';
import { nanoid } from 'nanoid'
import { MyStore } from '../Context/useContext';

const Products = () => {

 let {products,setProducts}=useContext(MyStore)


  const fetchdata=async()=>{
    try {
      let res=await axios.get('https://fakestoreapi.com/products')
      console.log(res.data)
      setProducts(res.data)
    } catch (error) {
      console.log(error)
      
    }

  }

  useEffect(()=>{
    fetchdata()
 
  },[])

     let updatedarr=[...products]
    localStorage.setItem("data",JSON.stringify(updatedarr))


  return (
    <div className='flex flex-wrap gap-5 p-4'>
       {products.map((elem)=>{
        return <Cards key={elem.id} elem={elem}></Cards>
       })}
    </div>
  )
}

export default Products