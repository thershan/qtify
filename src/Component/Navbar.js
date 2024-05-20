import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="search" />
        <button className="searchButton">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zm-5.244 0a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"/>
          </svg>
        </button>
      </div>
      <div className="navbar-feedback">
        <button className="feedback-button">Give Feedback</button>
      </div>
    </div>
  );
}

export default Navbar;
