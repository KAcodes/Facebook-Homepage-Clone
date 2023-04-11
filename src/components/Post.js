import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { AiOutlineLike, AiFillHeart } from "react-icons/ai";
import { VscComment  } from "react-icons/vsc";
import { RiShareForwardLine } from "react-icons/ri";
import { BsThreeDots, BsGlobeAmericas } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { HiThumbUp } from "react-icons/hi";
import myPic from "./intropic.jpg";



const Post = ({profPic, name, date}) => {
    
  return (
    <Card className='post'>
      <Card.Title className='post-header'>
        <Row>
          <Col xs={1}><img className='smallImage' src={profPic}/></Col>
          <Col xs={9}>
            <span>
              <b>{name}</b> updated their cover photo.
            </span><br/>
            <span>{date} d . <BsGlobeAmericas/></span>
          </Col>
          <Col className='title-btns' xs={2}>
            <Button variant='light'><BsThreeDots/></Button>
            <Button variant='light'><MdClose/></Button>
          </Col>
        </Row>
      </Card.Title>
      <Card.Img variant="top" src={profPic} />
      <Card.Body>
        <div>
          <HiThumbUp className='reaction-btns likes'/><AiFillHeart className='reaction-btns hearts'/>
        </div>
        <div className='line'></div>
        <span className='interaction-btns'>
            <Button variant='light'><AiOutlineLike/>Like</Button>
            <Button variant='light'><VscComment/>Comment</Button>
            <Button variant='light'><RiShareForwardLine/>Share</Button> 
        </span>
        <div className='line'></div>
        <Row>
          <Col xs={1}><img 
            src={myPic}
            className="sideicon"/>
          </Col>
          <Col xs={11}>
              <div className="searchBar">
                <input className="searchInput" type="text" name="searchQueryInput" placeholder='Write a comment...' />
              </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
    
  )
}

export default Post