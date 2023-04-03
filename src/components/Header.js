import React from 'react'
import { Navbar, Nav, Dropdown, FormControl, Button, Col } from 'react-bootstrap'
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { FaFacebookMessenger, FaSearch } from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";

const Header = () => {
  return (
    <Navbar className='header'>
            <Col md={3} className='ps-4'>
                <h2 id="facebook-banner">
                    <b>facebook</b> 
                </h2>
            </Col>
            <Col md={6} className='py-1'>
                <div className="searchBar header-search">
                    <button id="searchQuerySubmit" type="submit">
                        <svg style={{ 
                            width:"26px", 
                            height:"26px"}} viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                        </svg>
                    </button>
                    <input id="topSearch" className="searchInput" type="text"  placeholder='Search Facebook'/>
                </div>
            </Col>
            <Col md={3} style={{textAlign: 'right'}}>
                <Button variant='light' className='right-header-btns'>
                    <FaFacebookMessenger/>
                </Button>
                <Button variant='light' className='right-header-btns'>
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