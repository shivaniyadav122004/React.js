import { useQuery } from "@tanstack/react-query"
import { fetchProducts } from "../apis/productsApis"

export const getProductApisHook=()=>{
  return useQuery({
    queryKey:['products'],
    queryFn:fetchProducts,
    staleTime:Infinity,
  })
}