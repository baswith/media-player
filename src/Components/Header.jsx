import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
          <Navbar bg="info" data-bs-theme="info">
        <Container>
          <Navbar.Brand href="/">
            {/* <img
              alt=""
              src=""
              width="80"
              height="60"
              className="d-inline-block align-top"
            /> */}
            <i className="ms-3 fa-solid fa-play text-light d-inline-block align-top" style={{paddingTop:"12px"}}></i>
            {''}
            <label className=' ms-3 fw-bolder text-light' style={{fontSize:"30px"}}>MEDIA PLAYER</label>
            
          </Navbar.Brand>
        </Container>
      </Navbar>
    
    </>
  )
}

export default Header