import React from 'react';
import { Button } from 'react-bootstrap';
import { FaFacebookMessenger, HiHome } from "react-icons/hi";
import {BsFillPlayBtnFill} from "react-icons/bs";
import {FaUserFriends} from "react-icons/fa";
import {AiFillShop} from "react-icons/ai";
import {RiGamepadFill} from "react-icons/ri";



const LeftSidebar = () => {
  return (
    <div className='leftside ms-3'>
        <Button variant='light' className='leftside-btn'>
            <HiHome className='sideicon'/> Home
        </Button>
        <Button variant='light'>Your Profile</Button>
        <Button variant='light'>
            <BsFillPlayBtnFill className='sideicon'/>Watch
        </Button>
        <Button variant='light'>
            <FaUserFriends className='sideicon'/>Friends
        </Button>
        <Button variant='light'>
            <AiFillShop className='sideicon'/>Marketplace
        </Button>
        <Button variant='light'>
          <RiGamepadFill className='sideicon'/>Gaming
        </Button>
        
    </div>
  )
}

export default LeftSidebar