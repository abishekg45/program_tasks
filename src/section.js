import React, { useState } from "react";
import "./section.css";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-bootstrap";
import YouTube from "react-youtube";
import Icon from './icons/Course-Menu-Item-Icon.png'

const MyComponent = () => {
  const handleOnReady = (event) => {
    console.log("Player ready!");
  };

  const handleOnError = (event) => {
    console.error("Error playing video:", event.target.error);
  };

  return (
    <div>
      <YouTube
        videoId="9GBydDR4D2k" // YouTube video ID
        height={390}
        width={640}
        playerVars={{ autoplay: 1 }}
        onReady={handleOnReady}
        onError={handleOnError}
      />
    </div>
  );
};

const FAQSection = () => {
    const [expanded, setExpanded] = useState(null); // Track the expanded item
  
    const toggleSection = (index) => {
      setExpanded((prev) => (prev === index ? null : index));
    };
  
    const faqItems = [
      {
        question: "Do I need UX/UI experience?",
        answer:
          "UX/UI experience is essential for design-specific roles, other positions benefit from at least a basic understanding of these principles. Investing time in learning the fundamentals of UX/UI can enhance collaboration, improve product quality, and contribute to a more seamless user experience.",
      },
      {
        question: "Can I start with no prior experience?",
        answer: "You can build your knowledge from scratch. No prior experience is necessary!",
      },
      {
        question: "What if I get stuck during the course?",
        answer: "No worries! We'll guide you from the basics.",
      },
    ];
  
    return (
      <>
      <div className="faq-section">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${expanded === index ? "expanded" : ""}`}
            onClick={() => toggleSection(index)}
          >
            <div className="faq-question">
              <span>{item.question}</span>
              <span className="faq-icon">{expanded === index ? "-" : ">"}</span>
            </div>
            {expanded === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
      <div className="card mt-5 p-4 border-0 shadow">
        <div className="row g-3 align-items-center">
          {/* Text Section */}
          <div className="col-md-8">
            <h5 className="fw-bold">Got another question?</h5>
            <p className="text-muted">
              If you didn’t find your answer, contact our Bootcamp team. You can send us a message or join an intro
              session to meet our team and others.
            </p>
            <div className="d-flex gap-3">
              <button className="btn btn-dark">Send message</button>
              <button className="btn btn-outline-primary">Join a free intro session</button>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-md-3">
            <Image
              src="./assets/images/FAQ_image.png"
              alt="Intro Session"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
      </>
    );
  };
  



const ArtpreneurProgram = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleSection = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="artpreneur-container col-lg-12 col-md-12 col-sm-12">
      <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-12 stiky">
        <div className="left-sec">
         <h2><span><img src={Icon}/></span>Artpreneur Program</h2>
            <div className="list-side">
                <li>Overview</li>
                <li>Posts</li>
                <li>Next Batches</li>
                <li>FAQ</li>
            </div>

            <div className="text-center">
               <button>Get in touch</button>
            </div>
        </div>
      </div>
      <div className="right-col col-lg-8 col-md-8 col-sm-12">
        <div>
        <div className="overview">
          <h6 className="subtitle">Overview</h6>
          <h2 className="title">Be a part of the Creative Revolution.</h2>
        </div>
        <p className="description">
          Artpreneur program offers the following essential elements – art, design, creativity, technical tools,
          aesthetics, business skills, branding and teaching. The course is not limited to just these 8 elements but
          includes a gamut of aspects like hands-on practice sessions, interactive discussions, live projects,
          brainstorming, time management, personality development, and insights to make an individual distinct in the
          creative industry.
        </p>
        <Row md={12} className="skills-section">
          <h5>Skills you will learn:</h5>
          <div className="skills">
            <span className="skill-badge">User research</span>
            <span className="skill-badge">Wireframing</span>
            <span className="skill-badge">Prototyping</span>
            <span className="skill-badge">Usability testing</span>
          </div>
        </Row>
  
        <Row md={12} className="prerequisites">
          <h6>Prerequisites:</h6>
          <p>Absolutely no experience is required. We start with the Basics!</p>
        </Row>
  
        <Row md={12} className="level">
          <h6>Level:</h6>
          <p>Beginner</p>
        </Row>
        <MyComponent />
        <FAQSection />
      </div>
      </div>
      </div>
    </div>
  );
};

export default ArtpreneurProgram;
