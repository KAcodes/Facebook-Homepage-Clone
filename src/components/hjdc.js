import React from 'react';
import { Card, Nav, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Post from './Post';


const Posts = () => {

    const [profileArray, setProfileArray] = useState([])
 
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
    <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item style={{width: '50%'}}>
            <Nav.Link href="#first">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item style={{width: '50%'}}>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Button variant="light">Go somewhere</Button>
            </Card>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    {posts}
    </>
  )
}

export default Posts