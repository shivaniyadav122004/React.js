import { useProductApisHook } from '../customHook/useUserApisHook'

const Users = () => {

const {data,isPending}=useProductApisHook()
console.log(data)

  return (
    <div>
      {data?.map((elem)=>{
        return <div key={elem.id} className='flex gap-10 h-10 bg-amber-500 p-5 '>
          <h1>{elem.id}</h1>
          <h1>email-{elem.email}</h1>
          <h1>username-{elem.username}</h1>
        </div>
      })}
    </div>
  )
}

export default Users