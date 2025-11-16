import React from 'react'

const Bottom = ({salaryPerHour,placeOfWork}) => {
  return (
    <div className='bottom'>
      <div className='bottom-left'>
        <h2>${salaryPerHour}</h2>
        <h5>{placeOfWork}</h5>
      </div>
      <button>Appy Now </button>
     
    </div>
  )
}

export default Bottom