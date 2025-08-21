import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';

function RegistrationForm() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    document.body.appendChild(script);

    return () => document.body.removeChild(script);
  }, []);

  return (
    <Row className="py-5" style={{ backgroundColor: '#2b2b2b', borderRadius: '10px' }}>
      <Container className="justify-content-center">
        {/* Col controls the width */}
       
          <h2 className="text-center mb-4" style={{ color: '#fff' }}>
            Register to Attend
          </h2>
          <div
            style={{ width: '100%', height: '500px' }}
            data-fillout-id="25WUcH97N7us"
            data-fillout-embed-type="standard"
            data-fillout-inherit-parameters
            data-fillout-dynamic-resize
          ></div>

      </Container>
    </Row>
  );
}

export default RegistrationForm;
