import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Post from './Post';
import { HomeTab, ReelsTab } from './PageTab';
import { CgClapperBoard } from 'react-icons/cg';
import { BsEmojiSmile } from 'react-icons/bs';
import { GrGallery } from 'react-icons/gr';
import { FaVideo } from 'react-icons/fa';
import { IoBook } from 'react-icons/io5';
import myPic from "./intropic.jpg";


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
    return <Post key={index} name={user.name.first + ' ' + user.name.last} profPic={user.picture.large} date={index} />
  });

  return (
    <>
      <Card id="top-post" className='post'>
        <Card.Header style={{ backgroundColor: "white" }}>
          <button
            className={activeTab === "tab1" ? "tab-active" : "tab-unactive"}
            onClick={() => setActiveTab('tab1')}
          ><span className='top-post-headers'><IoBook style={{ fontSize: "24px" }}/><span style={{ fontSize: "14px" }}>Stories</span></span>
          </button>
          <button
            className={activeTab === "tab2" ? "tab-active" : "tab-unactive"}
            onClick={() => setActiveTab('tab2')}
          ><span className='top-post-headers'><CgClapperBoard style={{ fontSize: "24px" }}/><span style={{ fontSize: "14px" }}>Reels</span></span>
          </button>
        </Card.Header>
        {activeTab === "tab1" ? <HomeTab /> : <ReelsTab />}
      </Card>
      <Card className='post'>
        <Row className="rightsidebar-heading" style={{ padding: '10px 5px 5px 20px' }}>
          <Col xs={1}><img
            src={myPic}
            id="myPostPic"/>
          </Col>
          <Col xs={11}>
            <input id="myPost" className="searchInput" type="text" placeholder='What&#39;s on your mind, John Doe?' />
          </Col>
        </Row>
        <div className='line'></div>
        <Row className="" style={{ padding: '10px 5px 5px 20px' }}>
          <Col>
            <span className='interaction-btns interaction-btns-search'>
            <Button variant='light'>
              <FaVideo style={{ color: 'red' }} className=' big-icon' /> Live Video
            </Button>
            <Button  variant='light'>
              <GrGallery style={{backgroundColor: 'green'}} className=' big-icon'/> Photo/video
            </Button>
            <Button  variant='light'>
              <BsEmojiSmile style={{color: 'yellow' }} className=' big-icon'/> Feeling/activity
            </Button>
            </span>
          </Col>
        </Row>
        

      </Card>

      {posts}
    </>
  )
}

export default Posts