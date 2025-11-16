import React from 'react'
import Top from './Top'
import Center from './Center'
import Bottom from './Bottom'

const Card = ({brandLogo ,brandName,day,typeOfEngineer,time,level,salaryPerHour,placeOfWork}) => {
  

  return (
    <div className='card'>
      <Top brandLogo={brandLogo} />
      <Center  brandName={brandName} day={day} typeOfEngineer={typeOfEngineer} time={time} level={level}/>
      <Bottom salaryPerHour={salaryPerHour} placeOfWork={placeOfWork}/>
    </div>
  )
}

export default Card