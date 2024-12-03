import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './footer.css'
import Image from 'react-bootstrap/Image';

const Footer = () => {
  return (
    <footer className="bg-footer">
      <Container>
        <Row>
          <Col md={5} className='align-items-left'>
            <Image className="footerLogo" src='.\assets\images\logo.png'></Image>
            <h5>Atma Studios · Learn UX/UI Bootcamps & Online Courses</h5>
            <p>132 Dartmouth Street, KK Nagar, Chennai 600025.</p>
            <Row className="align-items-center">
        <Col xs={6} className="d-flex justify-content-left">
        <li className="mb-3 d-flex align-items-center">
                  <Image
                    src="https://img.icons8.com/material-outlined/24/ffffff/new-post.png"
                    alt="Email"
                    className="me-2"
                    style={{ width: '20px', height: '20px' }}
                  />
                  <span>demo@gmail.com</span>
                </li>
        </Col>
      </Row>
          
          <Row md={12}>
            <Col xs={6} className="d-flex justify-content-left">
            <li className="mb-3 d-flex align-items-center">
                  <Image
                    src="https://img.icons8.com/material-outlined/24/ffffff/phone--v1.png"
                    alt="Phone"
                    className="me-2"
                    style={{ width: '20px', height: '20px' }}
                  />
                  <span>+91 93456 78459</span>
                </li>
            </Col>
          </Row>
          </Col>
          <Col md={4}>
            <h5>Courses</h5>
            <hr className='borderLine'></hr>
            <ul className="no-bullets">
              <li>UX/UI Bootcamp</li>
              <li>Design System Bootcamp</li>
              <li>UX Research Bootcamp</li>
              <li>UI Design Bootcamp</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Atma Studios</h5>
            <hr className='borderLine'></hr>
            <ul className="no-bullets">
              <li>Our story</li>
              <li>Get In Touch</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Threads</li>
            </ul>
          </Col>
        </Row>
        <Row md={4}className="d-flex justify-content-between">
          <p>&copy; Atma Studios | Terms & Privacy</p>
          <p>Powered by dossier.nexus</p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
