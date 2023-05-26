import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

export default function Menu() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-3">
            <Container>
                <Navbar.Brand href="/post-list">MY POSTS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            {' '}
                            <Link className="text-decoration-none text-white" to="/post-list">
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            {' '}
                            <Link className="text-decoration-none text-white" to="/about-me">
                                About Me
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            {' '}
                            <Link className="text-decoration-none text-white" to="/post-details">
                                Post Details
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            {' '}
                            <Link className="text-decoration-none text-white" to="/users">
                                users
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}