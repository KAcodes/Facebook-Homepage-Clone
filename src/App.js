import { useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import './App.css';

function App() {


  
  return (

    <div>
      <Container fluid>
        <Row>
          <Col>
            <Header/>
          </Col>
        </Row>
        <Row>
          <Col md={3}><LeftSidebar/></Col>
          <Col md={6}></Col>
          <Col md={3}><RightSidebar/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
