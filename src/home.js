import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import './home.css';

function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Atma Studios</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Community</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">For Teams</a>
              </li>
            </ul>
            <Button
              variant="outline-light"
              className="ms-auto"
              onClick={togglePopup}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </nav>
      <section className="hero text-light text-center text-sm-start">
        <div className="container py-5 px-4 px-sm-0">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6 hero-content">
              <p className="CourseTitle1 mb-3">LIVE COURSE . ART, DESIGN, ENTREPRENEURSHIP</p>
              <h1 className="CourseTitle2 display-5 fw-bold lh-1 mb-3">Artpreneur Program</h1>
              <div className="students-info">
                <div className="avatars">
                  <Image className="avatar" src="/assets/images/avatar1.png" />
                  <Image className="avatar sid-1" src="/assets/images/avatar2.png" />
                  <Image className="avatar sid-1" src="/assets/images/avatar3.png" />
                </div>
                <span className='Course3'>+ 250 students enrolled</span>
              </div>
              <p className="lead">This Deca-dimensional program is about Art, Design, Creativity, Software, Aesthetics, Teaching, Communication, Sales, Branding, and Marketing.</p>
              <button type="button" className="btn cta-btn px-4 me-sm-3" onClick={togglePopup}>Get in Touch</button>
            </div>
            <div className="col-lg-6 hero-image">
              <Image src="./assets/images/homeflower.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {isPopupVisible && (
        <Container fluid className="vh-100 d-flex align-items-center justify-content-center bg-light position-fixed top-0 start-0 w-100 h-100">
          <Row className="shadow rounded w-75 bg-white overflow-hidden">
            {/* Left Panel: Add Post */}
            <Col lg={6} className="p-4">
              <h3 className="mb-4">Add Post</h3>
              <Form>
                <Form.Group controlId="formTitle" className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" placeholder="Enter your title" />
                </Form.Group>
                <Form.Group controlId="formBody" className="mb-3">
                  <Form.Label>Body</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Type your body text here..." maxLength={100} />
                  <div className="text-muted text-end">0/100</div>
                </Form.Group>
                <Button variant="dark" type="submit" className="w-100">
                  Submit
                </Button>
              </Form>
            </Col>

            {/* Right Panel: Get in Touch */}
            <Col lg={6} className="p-4 text-light" style={{ backgroundColor: '#5a3b71' }}>
              <div className="d-flex justify-content-between align-items-center">
                <h4>Get in Touch</h4>
                <Button variant="link" className="text-light fs-5" onClick={togglePopup}>&times;</Button>
              </div>
              <ul className="list-unstyled mt-4">
                <li className="mb-3 d-flex align-items-center">
                  <Image
                    src="https://img.icons8.com/material-outlined/24/ffffff/phone--v1.png"
                    alt="Phone"
                    className="me-2"
                    style={{ width: '20px', height: '20px' }}
                  />
                  <span>+91 93456 78459</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <Image
                    src="https://img.icons8.com/material-outlined/24/ffffff/new-post.png"
                    alt="Email"
                    className="me-2"
                    style={{ width: '20px', height: '20px' }}
                  />
                  <span>demo@gmail.com</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <Image
                    src="https://img.icons8.com/material-outlined/24/ffffff/marker.png"
                    alt="Location"
                    className="me-2"
                    style={{ width: '20px', height: '20px' }}
                  />
                  <span>
                    132 Dartmouth Street, KK Nagar,<br />
                    Chennai 600025.
                  </span>
                </li>
              </ul>
              <Button variant="light" className="mt-3">View directions</Button>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default App;
