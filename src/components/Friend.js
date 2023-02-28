import React, { useEffect } from 'react'

const Friend = ({profPic, firstName, lastName}) => {
    

  return (
    <div className='friends'>
        <img src={profPic}/><span>{firstName} {lastName}</span>
    </div>
  )
}

export default Friend