import { createBrowserRouter } from "react-router"
import AuthLayout from "../Layout/AuthLayout"
import { RouterProvider } from "react-router"
import HomeLayout from "../Layout/HomeLayout"
import Songs from "../pages/Songs"

export const AppRouting=()=>{
  const router=createBrowserRouter([
    {
      path:"/",
      element:<AuthLayout>
      </AuthLayout>

    },
    {
      path:'/home',
      element:<HomeLayout/>,
      children:[
        {
          path:"",
          element:<Songs/>
        }
      ]
    }
  ])

  return <RouterProvider router={router}/>
}

export default AppRouting 