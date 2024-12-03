import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './home.js';                                        
import Course from './course.js';                                        
import CourseCarousel from './bootcamp.js';                                        
import reportWebVitals from './reportWebVitals';
import Footer from './footer.js';
import ArtpreneurProgram from './section.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <Home/>
    <ArtpreneurProgram/>
    <CourseCarousel/>
    <Footer/>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
