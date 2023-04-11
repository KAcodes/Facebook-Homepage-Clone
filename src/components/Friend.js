import React from 'react'
import { Button } from 'react-bootstrap'

const Friend = ({profPic, firstName, lastName}) => {
    
  return (
        <Button variant='light'>
            <span><img src={profPic}/><span className='online-dot'></span><span className='friend-name'>{firstName} {lastName}</span></span></Button>
  )
}

export default Friend