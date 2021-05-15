import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  console.log('Navbar rendered');
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">
        <img
          src="/fortnite.jpg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="fortnite character pic"
        />
      </Navbar.Brand>

      <Nav className="ml-auto">
        <Link className="nav-link" to="/shop">
          Shop
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
