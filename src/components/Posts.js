import React from 'react';
import { Card, Nav, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Post from './Post';
import { HomeTab, ReelsTab } from './PageTab';


const Posts = () => {

    const [profileArray, setProfileArray] = useState([])
    const [activeTab, setActiveTab] = useState('tab1')
 
    useEffect(() => {
      
            const createFriends = async () => {
              const response = await fetch("https://randomuser.me/api/?results=7");
              const data = await response.json();
    
              setProfileArray(data.results);
  
            }
            
            createFriends()
    }, []);

    const posts = profileArray.map((user, index) => {
        return <Post key={index} name={user.name.first + ' ' + user.name.last}  profPic={user.picture.large}/>
      });

  return (
    <>
    <Card id="top-post" className='post'>
      <Card.Header style={{backgroundColor: "white"}}>
        <button 
            className={activeTab === "tab1" ? "tab-active" : "tab-unactive"}
            onClick={() => setActiveTab('tab1')}
            >Stories</button>
        <button 
            className={activeTab === "tab2" ? "tab-active" : "tab-unactive"}
            onClick={() => setActiveTab('tab2')}
            >Reels</button>
      </Card.Header>
      {activeTab === "tab1" ? <HomeTab /> : <ReelsTab />}
    </Card>
    {posts}
    </>
  )
}

export default Posts