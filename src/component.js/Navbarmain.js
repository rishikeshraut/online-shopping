import React from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Login from './Login';
import './nav2.css';


function Navbarmain() {

  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  
  return (
   
      
      <div className='Nav2'>
      <Navbar>
      <Container>
      <div> <h3 style={{color:'white', marginLeft:'200px'}}>ONLINE SHOPING</h3></div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><Login/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Form className="searchbar">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> 
          <div className='navbtn'>
          <Button variant="primary" onClick={handleShow}>Log In</Button>{' '} &nbsp;&nbsp;&nbsp;
          <Button variant="primary">Seller</Button>{' '}
          </div>
        
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
           
          </Navbar.Text>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
    
  );
}

export default Navbarmain;