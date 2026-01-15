import { use } from "react";
import { useState } from "react";
import { createContext } from "react";

export let MyAllTask=createContext()

export const TaskProvider=({children})=>{

  const [allData,setAlldata]=useState(()=>{
    return JSON.parse(localStorage.getItem("work"))|| []
  })

  const [itemid,setItemid]=useState(null)

  return (
    <MyAllTask.Provider value={{allData,setAlldata,itemid,setItemid}}>
      {children}
    </MyAllTask.Provider>
  )
}