import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';


const NavApp =() => {
const [toggle, setToggle]= useState(
  {
    isOpen: false,
  });

  return (
    <div>
      <Navbar color="info" dark expand="sm" className ="mb-5">
        <Container>
      <NavbarBrand  style ={{ fontFamily: 'Hanalei Fill, cursive' }} className="white" href ="/">Rick and Morty App </NavbarBrand>
      <NavbarToggler onClick = {()=> setToggle({isOpen: !toggle.isOpen})} />
      <Collapse isOpen = {toggle.isOpen} navbar >
      <Nav className= "ml-auto" navbar >
        <NavItem>
        <NavLink href ="/">
          Characters
        </NavLink>
        </NavItem>
        <NavItem>
        <NavLink href ="https://github.com/francisvelueta/Rick-and-Morty-app">
          <i className="fab fa-github-alt"></i>
        </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
    </Container>
    </Navbar>
    </div>
    );
}

export default NavApp;
