import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function RegistrationForm() {
  return (
    <Container className="py-5" id="register">
      <h2 className="text-center mb-4">Register to Attend</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message (optional)</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="danger" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default RegistrationForm;
