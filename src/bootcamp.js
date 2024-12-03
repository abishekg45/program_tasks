import React, { useState,useEffect} from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootcamp.css'; // Add custom CSS for styling
import Image from 'react-bootstrap/Image';
import axios from 'axios';


function CourseCarousel() {
    const [post, setPost] = useState(null);
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          console.log(`Fetched data:`, response.data); // Properly log the data
          setPost(response.data);
        })
        .catch((error) => {
          console.error(`Error fetching posts:`, error); // Log errors if any
        });
    }, []);
  const courses = [
    {
      title: 'Master Digital Product Design: UX Research & UI Design',
      image: '/assets/images/bootcamp.png',
      price: '₹74,700',
    },
    {
      title: 'Master Digital Product Design: UX Research & UI Design',
      image: '/assets/images/bootcamp.png',
      price: '₹74,700',
    },
    {
      title: 'Master Digital Product Design: UX Research & UI Design',
      image: '/assets/images/bootcamp.png',
      price: '₹74,700',
    },
    {
      title: 'Master Digital Product Design: UX Research & UI Design',
      image: '/assets/images/bootcamp.png',
      price: '₹74,700',
    },
    // ...more courses (up to 10)
  ];

  return (
    <>
    <div className="containerCourse">
        <p className="text-uppercase text-secondary mb-2" style={{ fontSize: "14px" }}>
          More courses on Art and Entrepreneurship
        </p>
        <h1 className="display-4 fw-bold mb-3">
          Accelerate your career <br />
          in a <span className="text-muted">UX/UI bootcamp</span>
        </h1>
        <p className="text-secondary mb-4" style={{ fontSize: "18px" }}>
          Start a new career in tech or accelerate in your existing design,
          engineering, or product role with the accountability of a live class
        </p>
        <button className="btn btn-dark px-4 py-2">View all courses</button>
    </div>

    <Container style={{ marginTop: '30px' }}>
      <div className="course-carousel">
        <Row className="gx-4">
          {courses.map((course, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index}>
              <Card>
                <Card.Img variant="top" src={course.image} />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>
                    <Row md ={12}>
                    <Row md ={12}>
                    <div className="avatars">
                  <Image className="avatar" src="/assets/images/avatar1.png" />
                  <Image className="avatar sid-1" src="/assets/images/avatar2.png" />
                  
                </div>
                <Row>
                </Row>
                
                    </Row>
                    <Col md ={6}>
                    
                    </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
    </>
  );
}

export default CourseCarousel;