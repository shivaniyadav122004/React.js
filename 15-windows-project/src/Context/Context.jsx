import { createContext, useState } from "react";

export let MyData=createContext()

export const DataProvider=({children})=>{
  const [openfile,setOpenfile]=useState(false)
  const [recyclewindow,setRecyclewindow]=useState(false)
  const [terminal,setTerminal]=useState(false)

  return (

  <MyData.Provider value={{openfile,setOpenfile,recyclewindow,setRecyclewindow,terminal,setTerminal}}>
       {children}
  </MyData.Provider>
)
}