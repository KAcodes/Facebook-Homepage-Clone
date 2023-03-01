import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { AiOutlineLike } from "react-icons/ai";
import { VscComment  } from "react-icons/vsc";
import { RiShareForwardLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { MdClose } from "react-icons/md";



const Post = ({profPic, name}) => {
    
    

  return (
    <Card >
        <Card.Title><b>{name}</b> updated their cover photo.
        <span className='title-btns'>
            <Button variant='light'><BsThreeDots/></Button>
            <Button variant='light'><MdClose/></Button>
        
        </span>
        </Card.Title>
        <Card.Img variant="top" src={profPic} />
      <Card.Body>
        <span className='interaction-btns'>
            <Button variant='light'><AiOutlineLike/>Like</Button>
            <Button variant='light'><VscComment/>Comment</Button>
            <Button variant='light'><RiShareForwardLine/>Share</Button> 
        </span>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    
  )
}

export default Post