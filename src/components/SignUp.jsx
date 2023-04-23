import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmpassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email: ', email);
    console.log('Password: ', password);
  }

  return (
    <div className='d-flex justify-content-center align-items-center' >
        <Form onSubmit={handleSubmit}>

        <Form.Group controlId="formBasicUsername">
            <Form.Label>User name</Form.Label>
            <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmpassword(e.target.value)} />
        </Form.Group>
        <div>
            <a style={{ color: 'blue', textDecoration: 'none'}} className='m-2' href='login'>Already have an account? </a>
        </div>
        <Button variant="primary" type="submit" className='m-2'>
            Submit
        </Button>
        </Form>
    </div>
  );
}

export default Login;
