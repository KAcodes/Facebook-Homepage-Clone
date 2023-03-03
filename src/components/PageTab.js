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
              <Button variant="light"> <Card.Img variant="top" src="holder.js/100px180" /><div>Create Story</div></Button>
      </Card>
      </Col>
      <Col 
       sm={9} 
           id="stories-sentences"
      > 
        <div><GiCardExchange className='me-2'/><span>Share everyday moments with friends and family.</span></div>
        <div><IoIosTimer className='me-2'/><span>Stories disappear after 24 hours</span></div>
        <div><FaFacebookMessenger className='me-2'/><span>Replies and reactions are private.</span></div>
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


