import React from 'react';
import { Button } from 'react-bootstrap';
import { FaFacebookMessenger, HiHome } from "react-icons/hi";
import {BsFillPlayBtnFill} from "react-icons/bs";
import {FaUserFriends} from "react-icons/fa";
import {AiFillShop} from "react-icons/ai";
import {RiGamepadFill} from "react-icons/ri";



const LeftSidebar = () => {
  return (
    <div className='leftside'>
        <Button className='leftside-btn'>
            <HiHome className='sideicon'/> Home
        </Button>
        <Button >Your Profile</Button>
        <Button >
            <BsFillPlayBtnFill className='sideicon'/>Watch
        </Button>
        <Button >
            <FaUserFriends className='sideicon'/>Friends
        </Button>
        <Button >
            <AiFillShop className='sideicon'/>Marketplace
        </Button>
        <Button >
          <RiGamepadFill className='sideicon'/>Gaming
        </Button>
        
    </div>
  )
}

export default LeftSidebar