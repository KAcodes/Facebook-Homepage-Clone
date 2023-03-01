import { useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import './App.css';
import Posts from './components/Posts';

function App() {


  
  return (

     <Container fluid className='g-0' >
        <Row noGutters={true}>
          <Col>
            <Header/>
          </Col>
        </Row>
        <Row>
          <Col md={3}><LeftSidebar/></Col>
          <Col md={6}><Posts/></Col>
          <Col md={3}><RightSidebar/></Col>
        </Row>
      </Container>
      

  );
}

export default App;
