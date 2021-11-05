import React from 'react';

// Set state based on tab click
function NavTabs({ handleTabChange }) {
  return (
    <ul className="container flex-row justify-space-between-lg justify-center align-center">
      <h1 className="m-0">
        <a
          href="#aboutMe"
          onClick={() => handleTabChange('AboutMe')}
        >
          About Me
        </a>
      </h1>
      <h1 className="m-0">
        <a
          href="#portfolio"
          onClick={() => handleTabChange('Portfolio')}
        >
          Portfolio
        </a>
      </h1>
      <h1 className="m-0">
        <a
          href="#contact"
          onClick={() => handleTabChange('Contact')}
        >
          Contact
        </a>
      </h1>
      <h1 className="m-0">
        <a
          href="#resume"
          onClick={() => handleTabChange('Resume')}
        >
          Resume
        </a>
      </h1>
    </ul>
  );
}

export default NavTabs;
