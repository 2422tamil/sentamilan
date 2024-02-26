import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skill from './Skill';
import Education from './Education';
import Blog from './Blog';
import Contact from './Contact';
import Services from './Services';
import Location from './Location';
;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Navbar/>
  <Home/>
  <About/>
  <Skill/>
  <Education/>
  <Services/>
  <Blog/>
  <Contact/>
  <Location/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// App.js

