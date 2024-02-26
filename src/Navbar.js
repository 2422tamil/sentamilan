import React from 'react';
import './Navbar.css';

const Navbar= () => {
  return (
    <nav className="navbar">
      <div className="logo">sentamilan.s</div>
      <ul className="nav-list">
        <a href='#Home'><li>Home</li></a>
        <a href='#About'><li>About</li></a>
        <a href='#Skill'><li>Skill</li></a>
        <a href='#Education'><li>Education</li></a>
        <a href='#Service'><li>Service</li></a>
        <a href='#Blog'><li>Blogs</li></a>
        <a href='#Contact '><li>Contact</li></a>
        <a href='#location'><li>location</li></a>
      </ul>
    </nav>
  );
};

export default Navbar;