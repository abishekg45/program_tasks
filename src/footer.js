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
            <h5 className='para'>Atma Studios · Learn UX/UI Bootcamps & Online Courses</h5>
            <p className='para'>132 Dartmouth Street, KK Nagar, Chennai 600025.</p>
            <Row className="align-items-center">
        <Col xs={6} className="d-flex justify-content-left">
        <li className="mb-3 d-flex align-items-center">
                  <Image
                    src="https://img.icons8.com/material-outlined/24/ffffff/new-post.png"
                    alt="Email"
                    className="para me-2"
                    style={{ width: '20px', height: '20px' }}
                  />
                  <span className='para'>demo@gmail.com</span>
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
                  <span className='para'>+91 93456 78459</span>
                </li>
            </Col>
          </Row>
          </Col>
          <Col md={4}>
            <h5 className='para'>Courses</h5>
            <hr className='borderLine'></hr>
            <ul className="no-bullets">
              <li className='para'>UX/UI Bootcamp</li>
              <li className='para'>Design System Bootcamp</li>
              <li className='para'>UX Research Bootcamp</li>
              <li className='para'>UI Design Bootcamp</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className='para'>Atma Studios</h5>
            <hr className='borderLine'></hr>
            <ul className="no-bullets">
              <li className='para'>Our story</li>
              <li className='para'>Get In Touch</li>
              <li className='para'>Instagram</li>
              <li className='para'>LinkedIn</li>
              <li className='para'>Threads</li>
            </ul>
          </Col>
        </Row>
        <Row md={4}className="d-flex justify-content-between">
          <p className='para'>&copy; Atma Studios | Terms & Privacy</p>
          <p className='para'>Powered by dossier.nexus</p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
