import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import { BiVideoPlus } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { useEffect } from 'react';
import Friend from './Friend';



const RightSidebar = () => {

  const [profileArray, setProfileArray] = useState([])
 
  useEffect(() => {
    
  
          const createFriends = async () => {
            const response = await fetch("https://randomuser.me/api/?results=15");
            const data = await response.json();
            console.log(data)
  
            setProfileArray(data.results);

          }
          
          createFriends()
  }, [])

 

  const profiles = profileArray.map((user, index) => {
    return <Friend key={index} firstName={user.name.first} lastName={user.name.last} profPic={user.picture.thumbnail}/>
  })



  
  return (
    <div className='rightside'>
      <div className='rightsidebar-heading'>
            <span style={{width: '50%'}} >Contacts</span>
            <div style={{textAlign: 'right',
          width: '50%'}}>
            <Button><BiVideoPlus/></Button>
            <Button><FaSearch/></Button>
            <Button><BsThreeDots/></Button>
            </div> 
      </div>
      <div className='rightsidebar-profiles'>
        {profiles}
      </div>
    </div>
  )
}

export default RightSidebar