import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Container, Row, Col, Card, Navbar, Nav, Form, Button, NavDropdown } from 'react-bootstrap';


export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
// Declare hook for each input
  const [ usernameErr, setUsernameErr ] = useState('');
  const [ passwordErr, setPasswordErr ] = useState('');

// validate user inputs
const validate = () => {
    let isReq = true;
    if(!username){
     setUsernameErr('Username Required');
     isReq = false;
    }else if(username.length < 5){
     setUsernameErr('Username must be 5 characters long');
     isReq = false;
    }
    if(!password){
     setPasswordErr('Password Required');
     isReq = false;
    }else if(password.length < 6){
     setPassword('Password must be 6 characters long');
     isReq = false;
    }
    return isReq;
}

const handleSubmit = (e) => {
  e.preventDefault();
  const isReq = validate();
  if(isReq) {
    /* Send request to the server for authentication */
    axios.post('https://myflix--movies-application1.herokuapp.com/login', {
        Username: username,
        Password: password
    })
    .then(response =>{
        const data = response.data;
        props.onLoggedIn(data);
    })
    .catch(e => {
      console.log('no such user')
    });
  }
};

  return (
    <Container fluid className="mt-12">
    <Navbar className="w-full" variant="dark">
      <Container className="flex">
        <Navbar.Brand href="#home">MyFlix Movies App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbarColor02">
          <Nav className="justify-between">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Row className="justify-content-sm-center flex">
        <Col xs={12} sm={9} md={7} lg={6} xl={5}>
          <Card variant="light" bg="light">
            <Card.Body>
      <div className='form-container'>
      <h2 className="text">Login</h2>
    <Form id="formstyle">
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter your username" 
        value={username} onChange={e => setUsername(e.target.value)} />
        {/* code added here to display validation error */}
        {usernameErr && <p>{usernameErr}</p>}
        </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
        value={password} onChange={e => setPassword(e.target.value)} />
        {/* code added here to display validation error */}
        {passwordErr && (
        <p className="validation-message">{passwordErr}</p>
        )}
        </Form.Group>
        <div className='button'>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
        </Button>
        </div>
    </Form>
    </div>
    </Card.Body>
    <Card.Footer>
    <p>Not Registered?</p>
    <Button className="ma-0 col-10 onset-1" variant="link">
    <div className='singup'>
    <a href="../registration-view" class="btn btn-info" role="button">Sign Up</a>
    </div>
    </Button>
    </Card.Footer>
    </Card>
    </Col>
    </Row>
    </Container>
  )
}
    

LoginView.PropTypes = {
  onLoggedIn: PropTypes.func.isRequired,
  Username: PropTypes.string.isRequired,
  Password: PropTypes.string.isRequired,
};






