import { axiosInstance } from "../configure/axiosInstance"

export const fetchProducts=async()=>{
  try {
    let res=await axiosInstance('/products')
    if(res){
           return res.data
    }
 
    
  } catch (error) {
    console.log(error)
    
  }
}
