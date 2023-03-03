import React from 'react'
import { Card, Button, Col, Row } from 'react-bootstrap';
import {GiCardExchange} from 'react-icons/gi';
import { FaFacebookMessenger } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";


const HomeTab = () => {

  return (
    <Card.Body>
      <Row>
      <Col sm={3}>
      <Card style={{ 
              height: 'auto'
           }}>
              <Button variant="light"> <Card.Img variant="top" src="holder.js/100px180" /><span>Create Story</span></Button>
      </Card>
      </Col>
      <Col sm={9}> 
        <span><GiCardExchange/><p>Share everyday moments with friends and family.</p></span>
        <span><IoIosTimer/><p>Stories disappear after 24 hours</p></span>
        <span><FaFacebookMessenger/><p>Replies and reactions are private.</p></span>
      </Col>
      </Row>
      </Card.Body>
  )
}

export {HomeTab};

const ReelsTab = () => {

   
  return (
    <Card.Body>
            boooo
      </Card.Body>
  )
}

export {ReelsTab};


