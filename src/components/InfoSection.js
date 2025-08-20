import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function InfoSection() {
  return (
    <Container fluid className="bg-dark text-white py-5" id="info">
      <Container>
        <Row>
          <Col md={4}>
            <h4>Event Time</h4>
            <p>October 31, 2025, 7:00 PM - Midnight</p>
          </Col>
          <Col md={4}>
            <h4>Location</h4>
            <p>Old Ocean Street Hall, Main Street, YourTown</p>
          </Col>
          <Col md={4}>
            <h4>Contact</h4>
            <p>Email: info@halloweenbash.com</p>
            <p>Phone: (555) 123-4567</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default InfoSection;
