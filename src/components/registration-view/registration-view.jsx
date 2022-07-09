import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Form, Button, Card, CardGroup, Container, Col, Row, Navbar, Nav } from 'react-bootstrap';

import './registration-view.scss';
export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
      axios
        .post("https://myflix--movies-application1.herokuapp.com/users", {
          Username: username,
          Password: password,
          Email: email,
          Birthday: birthdate,
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
          alert("Registration successful, please login!");
          window.open("/", "_self"); // the second argument is necessary so that the page will open in the current tab
        })
        .catch((response) => {
          console.error(response);
          alert("unable to register");
        });
    };

  return (
    <Container fluid className="registerContainer text-center my-3 mx-12">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">MyFlix Movies Aplication</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Row>
        <Col>
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">Please Register</Card.Title>
                <Form>
                  <Form.Group className="mb-3" controlId="'formBasicUsername'">
                    <Form.Label>
                      Username:
                      <Form.Control
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter Username"
                        required
                        minLength="4"
                      />
                    </Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>
                      {' '}
                      Password:
                      <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                        required
                        minLength="8"
                      />
                    </Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>
                      Email:
                      <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@email.com"
                        required
                      />
                    </Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicBirthday">
                    <Form.Label>
                      Birthdate:
                      <Form.Control
                        type="date"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                        placeholder="27.08.1999"
                        required
                      />
                    </Form.Label>
                  </Form.Group>
                  <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Register
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}

RegistrationView.propTypes = {
  onRegistration: PropTypes.func.isRequired,
    register: PropTypes.shape({
      Username: PropTypes.string.isRequired,
      Password: PropTypes.string.isRequired,
      Email: PropTypes.string.isRequired,
      Birthdate: PropTypes.string,
    }),
  };
  

