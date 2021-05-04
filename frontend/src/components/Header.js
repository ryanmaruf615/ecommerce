import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";


const Header = () =>{
    return(
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <Link to="/">
                        <Navbar.Brand >Shuti</Navbar.Brand>
                    </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="/cart"><i className="fas fa-shopping-cart"></i>Cart</Link>
                        <Link className="nav-link" to="/login"> <i className="fas fa-user"></i>SignIn</Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )};
export default Header;