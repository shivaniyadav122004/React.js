import { useState } from "react";
import { createContext } from "react";

export let MYdata=createContext()

export const DataProvider=({children})=>{
 const [info,setInfo]=useState([])
 console.log(info)

  return <MYdata.Provider value={{info,setInfo}}>
    {children}
  </MYdata.Provider>

}