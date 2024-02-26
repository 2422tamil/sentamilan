
import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="service">
        <h3>Web Design</h3>
        <p>We create stunning and user-friendly websites tailored to your needs.</p>
      </div>
      <div className="service">
        <h3>Mobile App Development</h3>
        <p>From concept to launch, we build innovative and scalable mobile applications.</p>
      </div>
      <div className="service">
        <h3>Digital Marketing</h3>
        <p>We help you reach your target audience and grow your business online.</p>
      </div>
      {/* Add more services as needed */}
    </div>
  );
}

export default Services;
