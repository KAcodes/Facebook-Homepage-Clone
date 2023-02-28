import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaFacebookMessenger, FaSearch } from "react-icons/fa";
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

  
  console.log()

  const profiles = profileArray.map((user, index) => {
    return <Friend key={index} firstName={user.name.first} lastName={user.name.last} profPic={user.picture.thumbnail}/>
  })



  
  return (
    <div className='rightside'>
      <div>
        <span>Contacts</span>
        <BiVideoPlus/>
        <FaSearch/>
        <BsThreeDots/>
      </div>
      <div>
        {profiles}
      </div>
    </div>
  )
}

export default RightSidebar