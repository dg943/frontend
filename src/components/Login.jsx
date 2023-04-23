import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { redirect } from 'react-router-dom';
import login from '../services/api.ts'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const isLoggedIn  = login(username, password)
    console.log(isLoggedIn)
  }

  return (
    <div className='d-flex justify-content-center align-items-center' >
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicUser">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <div>
            <a style={{ color: 'blue', textDecoration: 'none'}} className='m-2' href='signup'>Don't have an account? </a>
        </div>

        <Button variant="primary" type="submit" className='m-2'>
            Submit
        </Button>
        </Form>
    </div>
  );
}

export default Login;
