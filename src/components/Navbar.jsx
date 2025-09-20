import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-header container">
        <h1 className="logo">PLAYER1</h1>
        <ul className="nav-menu">
          <li className="nav-item"><a href="#home">HOME</a></li>
          <li className="nav-item"><a href="#about">ABOUT</a></li>
          <li className="nav-item"><a href="#projects">PROJECTS</a></li>
          <li className="nav-item"><a href="#skills">SKILLS</a></li>
          <li className="nav-item"><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;