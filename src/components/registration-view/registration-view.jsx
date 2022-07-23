import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, Form, CardGroup, Button, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import './registration-view.scss';

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  // Declare hook for each input error message (when invalid)
  const [values, setValues] = useState({
    usernameErr: '',
    passwordErr: '',
    emailErr: '',
    birthdayErr: '',
  });

  const validate = () => {
    let isReq = true;
    setValues((prev) => {
      return {
        usernameErr: '',
        passwordErr: '',
        emailErr: '',
        birthdayErr: '',
      };
    });

    if (!username) {
      // setValues re-defines values through a callback that receives
      // the previous state of values & must return values updated
      setValues((prevValues) => {
        return { ...prevValues, usernameErr: 'Username is required.' };
      });
      isReq = false;
    } else if (username.length < 5) {
      setValues((prevValues) => {
        return {
          ...prevValues,
          usernameErr: 'Username must be at least 6 characters long.',
        };
      });
    }
    if (!password) {
      setValues((prevValues) => {
        return { ...prevValues, passwordErr: 'Password is required.' };
      });
      isReq = false;
    } else if (password.length < 8) {
      setValues((prevValues) => {
        return {
          ...prevValues,
          passwordErr: 'Password must be at least 8 characters long.',
        };
      });
      isReq = false;
    }
    if (!email) {
      setValues({
        ...values,
        emailErr: 'Email is required.',
      });
      isReq = false;
    } else if (email.indexOf('@') === -1) {
      setValues((prevValues) => {
        return { ...prevValues, emailErr: 'Enter a valid email address.' };
      });
      isReg = false;
    }
    if (!birthday) {
      setValues((prevValues) => {
        return { ...prevValues, birthdayErr: 'Enter a valid date.' };
      });
      isReq = false;
    }
    return isReq;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isReq = validate();
    if (isReq) {
      // Send a POST request to /users endpoint to register & getting credentials
      axios
        .post('https://myflix--movies-application1.herokuapp.com/users', {
          Username: username,
          Password: password,
          Email: email,
          Birthday: birthday,
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
          window.open('/', '_self');
        })
        .catch((e) => {
          console.error(response);
          alert("there was an rrror during registration please try again");
        });
    }
  };

    return (
      <Container className="mt-5">
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MyFlix Movies Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex w-full justify-between">
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
      
        <Row className="justify-content-sm-center">
          <Col xs={12} sm={9} md={7} lg={6} xl={5}>
          <CardGroup>
            <Card variant="light" bg="light">
              <Card.Body>
                <h1>Sign Up</h1>
                <Form>
                  <Form.Group className="mt-4 mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                      placeholder="Enter your username"
                    />
                    {values.usernameErr && (
                      <p className="validation-message">{values.usernameErr}</p>
                    )}
                  </Form.Group>
  
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="Enter your password"
                    />
                    {values.passwordErr && (
                      <p className="validation-message">{values.passwordErr}</p>
                    )}
                  </Form.Group>
  
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="Enter your email"
                    />
                    {values.emailErr && (
                      <p className="validation-message">{values.emailErr}</p>
                    )}
                  </Form.Group>
  
                  <Form.Group className="mb-3">
                    <Form.Label>Birthdate</Form.Label>
                    <Form.Control
                      type="date"
                      value={birthday}
                      onChange={(event) => setBirthday(event.target.value)}
                      // placeholder="Enter your birthdate."
                      // pattern="/^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/"
                    />
                    {values.birthdayErr && (
                      <p className="validation-message">{values.birthdayErr}</p>
                    )}
                  </Form.Group>
  
                  <Button
                    className="mt-3"
                    type="submit"
                    variant="success"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Form>
              </Card.Body>
              <p>Already registered?</p>
              <Card.Footer className="pr-0 my-0">
                <Link to="/login-view.jsx">
                  <Button className="col-10 offset-1" variant="link">
                  <div className='login'>Login</div>
                  </Button>
                </Link>
              </Card.Footer>
            </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    );
  }

  RegistrationView.PropTypes = {
    onRegistration: PropTypes.func.isRequired,
      register: PropTypes.shape({
        Username: PropTypes.string.isRequired,
        Password: PropTypes.string.isRequired,
        Email: PropTypes.string.isRequired,
        Birthdate: PropTypes.string,
      }),
    };


