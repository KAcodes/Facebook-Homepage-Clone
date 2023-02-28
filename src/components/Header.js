import React from 'react'
import { Navbar, Nav, Dropdown, Badge, FormControl, Button } from 'react-bootstrap'
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { FaFacebookMessenger, FaSearch } from "react-icons/fa";


const Header = () => {
  return (
    <Navbar >
            
                <Navbar.Brand>
                    facebook
                </Navbar.Brand>
                <Navbar.Text className="search">
                    <FormControl
                        style={{ width: 300 }}
                        placeholder='Search Facebook'
                        className="m-auto"
                    />
                </Navbar.Text>
                <Nav>
                    <Dropdown >
                        
                        <Dropdown.Toggle variant="success">
                            <FaFacebookMessenger/>
                        </Dropdown.Toggle>
                        <DropdownMenu className="dropdown-menu-end">
                        </DropdownMenu>
                    </Dropdown>
                </Nav>
                <Nav>
                    
                </Nav>
                <FaFacebookMessenger>
                    <button><Dropdown>
                        <Dropdown.Toggle variant="success">
                            <FaFacebookMessenger/>
                        </Dropdown.Toggle>
                        <DropdownMenu className="dropdown-menu-end">
                        </DropdownMenu>
                    </Dropdown></button>
                </FaFacebookMessenger>


        </Navbar>
  )
}

export default Header