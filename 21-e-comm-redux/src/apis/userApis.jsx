import axios from "axios"
import { axiosInstance } from "../configure/axiosInstance"

export const fetchUsers=async()=>{
  try {
    let res=await axiosInstance("/users")
    if(res){
      return res.data
    }
    
  } catch (error) {
    console.log(error)
    
  }
}
