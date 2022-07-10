import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

//login for user - taking username and password
export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  /* Send a request to the server for authentication */
  axios.post('https://myflix--movies-application1.herokuapp.com/login', {
    Username: username,
    Password: password
  })
  .then(response => {
    const data = response.data;
    props.onLoggedIn(data);
  })
  .catch(e => {
    console.log('no such user')
  });
};
  return (
    < div className='form-container'>
        <h2>Login</h2>
    <Form>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
      </Form.Group> 

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      </Form.Group>
  
      <div className='button'>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
        </Button>
        </div>
    </Form>
    </div>
  )
}




