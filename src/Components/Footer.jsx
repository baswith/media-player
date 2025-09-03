import React from 'react'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <>
      <div className='bg-info p-5'>
        <div className="row">
          <div className="col-lg-5">
            <h3 className='text-light'>Media Player</h3>
            <p className='text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sit saepe neque voluptatem veritatis? Alias ea accusantium, voluptate iste nulla ipsum sunt iusto eaque non, praesentium ipsa quod perferendis placeat!</p>
          </div>
          <div className="col-lg-2">
            <h3 className='text-light'>Links</h3>
            <Link to={'/'} style={{ textDecoration: "none" }}>Landing</Link> <br />
            <Link to={'/home'} style={{ textDecoration: "none" }}>Home</Link> <br />
            <Link to={'/history'} style={{ textDecoration: "none" }}>History</Link>
          </div>
          <div className="col-lg-2">
            <h3 className='text-light'>Guides</h3>
            <a style={{ textDecoration: "none" }} href="">React</a> <br />
            <a style={{ textDecoration: "none" }} href="">React - Bootstrap</a> <br />
            <a style={{ textDecoration: "none" }} href="">React - Router</a>
          </div>
          <div className="col-lg-3">
            <h3 className='text-light'>Contact Us</h3>
            <Form>
              <Form.Group className="mb-3 me-5" controlId="exampleForm.ControlInput1">
                <Form.Label className='text-dark'>Email address</Form.Label>
                <Form.Control className='form-control' type="text" placeholder="Enter your email" />
              </Form.Group>

            </Form>

            <div className='pe-5 d-flex justify-content-around align-items-center'>
              <i className="fa-brands fa-facebook text-light"></i>
              <i className="fa-brands fa-linkedin text-light"></i>
              <i className="fa-brands fa-instagram text-light"></i>
              <i className="fa-brands fa-whatsapp text-light"></i>
              <i className="fa-solid fa-paper-plane text-light"></i>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Footer