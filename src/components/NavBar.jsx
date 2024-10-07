import React from 'react';

const NavBar = () => {
  return (
    <nav id="nav-menu-container">
      <ul className="nav-menu">
        <li className="menu-active"><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#coffee">Coffee</a></li>
        <li><a href="#review">Review</a></li>
        <li><a href="#blog">Blog</a></li>
        <li className="menu-has-children"><a href="#">Pages</a>
          <ul>
            <li><a href="generic.html">Generic</a></li>
            <li><a href="elements.html">Elements</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
