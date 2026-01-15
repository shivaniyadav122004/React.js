import React from 'react'
import { useContext } from 'react'
import { info } from './Context/Store'

const App = () => {
 let cd=useContext(info)
 console.log(cd)
 //agar hume cd info wale data me se sirf janakari wala vairable ya data chaiye to use hum aise likhenge 
 let {jankari}=useContext(info)
 console.log(jankari)


  return (
    <div>
      
    </div>
  )
}

export default App