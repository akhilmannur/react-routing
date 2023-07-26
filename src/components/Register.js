import React from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate=useNavigate()

  return (
 
    <div className='back' >
        <h1 className='App' >REGISTRATION FORM </h1>
    <div className='dilu'>
         <Form>
         <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
        <Form.Text className="text-muted">

        </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your lastname" />
        <Form.Text className="text-muted">

        </Form.Text>
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
     

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="confirm Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={()=>{navigate('/login')}}>
        Register
      </Button>
    </Form>
  

    </div>
    </div>

  )
}

export default Register