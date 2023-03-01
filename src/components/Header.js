import React from 'react'
import { Navbar, Nav, Dropdown, FormControl, Button, Col } from 'react-bootstrap'
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { FaFacebookMessenger, FaSearch } from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";

const Header = () => {
  return (
    <Navbar className='header'>
            <Col md={3} className='ms-3'>
                <h2 id="facebook-banner">
                    facebook
                </h2>
            </Col>
            <Col md={6} >
                <Navbar.Text className="search">
                    <FormControl
                    placeholder='Search Facebook'
                    className="m-auto"></FormControl>
                </Navbar.Text>
            </Col>
            <Col md={3} style={{textAlign: 'right'}}>
                <Button variant='light' className='leftside-btn'>
                    <FaFacebookMessenger/>
                </Button>
                <Button variant='light' className='leftside-btn'>
                    <BsFillBellFill/>
                </Button>
                <FaFacebookMessenger>
                    <button><Dropdown>
                        <Dropdown.Toggle variant="success">
                            
                        </Dropdown.Toggle>
                        <DropdownMenu className="dropdown-menu-end">
                        </DropdownMenu>
                    </Dropdown></button>
                </FaFacebookMessenger>
            </Col>


        </Navbar>
  )
}

export default Header