import React from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap';

export default function Header() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container className='d-flex justify-content-between'>
          <Navbar.Brand href="/">CURD</Navbar.Brand>
          <Nav>
            <Nav.Link href="/create">Create</Nav.Link>
            <Nav.Link href="/view">View</Nav.Link>
            <Nav.Link href="/update">Update</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
