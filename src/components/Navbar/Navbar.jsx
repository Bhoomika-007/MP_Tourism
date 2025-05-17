import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { Sling as Hamburger } from 'hamburger-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu

  // Function to close the menu
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="nav-cont">
        <div className="navbar">
          <div className="nav-left">
            MP Tourism
          </div>

          <div className={`nav-right ${isOpen ? 'open' : ''}`}>
            <ul>
              <li className="para_col">
                <Link to="/" className="nav-link para_col" onClick={handleLinkClick}>Home</Link>
              </li>
              <li className="para_col">
                <Link to="/Temples" className="nav-link para_col" onClick={handleLinkClick}>Places</Link>
              </li>
              <li className="para_col">
                <Link to="/Contact" className="nav-link para_col" onClick={handleLinkClick}>Contact us</Link>
              </li>
            </ul>
          </div>

          <div className="nav-hamburger">
            <Hamburger toggled={isOpen} toggle={setIsOpen} color="#FAF3E0" size={30} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
