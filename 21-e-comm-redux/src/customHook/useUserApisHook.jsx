import { useQuery } from "@tanstack/react-query"
import { fetchUsers } from "../apis/userApis"

export const useProductApisHook=()=>{
  return useQuery({
    queryKey:['users'],
    queryFn:fetchUsers,
    staleTime:Infinity
  })
}