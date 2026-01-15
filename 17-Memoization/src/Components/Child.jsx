import React from 'react'
import { memo } from 'react'



const Child = ({fnc}) => {
  console.log("me child hun")


  //agar props change nhi hone to ye page rerender nhi hoga lekin agar props changes honge to ye page bhi rerende3r hoga hr baar
  return (
    <div>
      <h1>{fnc()}</h1>
    </div>
  )
}

// export default React.memo(Child)  //ract.memo ki jgah memo bhi likh skte hai 
export default memo(Child)