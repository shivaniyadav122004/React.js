import { createContext } from "react";

export let info=createContext()

export const Dukan=({children})=>{
let data="shivani" 
let jankari ="helllooo"
  return (
  <info.Provider value={{data,jankari}}>
    {children}
  </info.Provider>
  )


}