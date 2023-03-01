import React from 'react'
import { Button } from 'react-bootstrap'

const Friend = ({profPic, firstName, lastName}) => {
    
  return (
        <Button variant='light'>
            <span><img src={profPic}/> {firstName} {lastName}</span></Button>
  )
}

export default Friend