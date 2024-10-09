import React from 'react';
import './Navebar.css';
import { Container, Navbar } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router';

function Navebar() {
    const navigate = useNavigate();
  return (
    <>
        <Navbar collapseOnSelect expand='lg' className='bg-body-tertiary' bg='light' data-bs-theme='light'>
            <Container fluid className='navbar-container'>
                <Navbar.Brand onClick={() => navigate('/')}>News App</Navbar.Brand>
            </Container>
        </Navbar>

        <Outlet />
    </>
  )
}

export default Navebar
