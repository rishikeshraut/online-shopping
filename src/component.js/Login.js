
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Modal} from 'react-bootstrap';


function Login() {


 
   

  return (
    
        <>
       
      
     
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Id</Form.Label>
        <Form.Control type="text" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text,Number"/>
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
        </>
    
  )
}

export default Login