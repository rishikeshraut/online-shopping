import React from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Login from './Login';
import './nav2.css';
import Category from './Category';
import Electronic from './Electronic'
import Cloth from './Cloth';
import Shooes from './shooes';


import {Routes,Route,Link} from 'react-router-dom';


function Navbarmain() {

  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  
  return (
   
      
      <div className='Nav2'>
      <Navbar>
      <Container>
      
      
               
      <div className='main'>

       
         
            
<div className='sidebar'>
 
 
<div className='Ink'>
 <Link className='Ink1' to="/Electronic"style={{color:'White', textDecoration:'none',}}> ELECTRONIC</Link> <br/>&nbsp;&nbsp;&nbsp;
 
 <Link className='Ink2' to="/Cloth"style={{color:'White', textDecoration:'none'}}>CLOTH</Link> <br/>&nbsp;&nbsp;&nbsp;
  <Link className='Ink3' to="/Shooes"style={{color:'White', textDecoration:'none'}}>SHOOES</Link> <br/>&nbsp;&nbsp;&nbsp;

 </div>
</div>
<div>
  
 </div>
<div >   
<Routes>
 <Route path='/category' element={<Category/>} />
 <Route path='/electronic' element={<Electronic/>} />
 <Route path='/cloth' element={<Cloth/>} />
 <Route path='/shooes' element={<Shooes/>} />

</Routes>
</div> 


      </div>
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
          <Button variant="success">Become Seller</Button>{' '}
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