import { createContext, useState } from "react";

export const AllData=createContext()

export const AllTask=({children})=>{
  const [collected,setCollected]=useState(()=>{
    return JSON.parse(localStorage.getItem("data"))|| []
  })

  const [itemid,setItemid]=useState(null)
  

  return (
    <AllData.Provider value={{collected,setCollected,itemid,setItemid}}>
          {children}
    </AllData.Provider>
  )
}
