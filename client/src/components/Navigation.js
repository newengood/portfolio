import React, { useState } from 'react';
import Project from './Project';

const Navigation = () => {
  const [project, setProject] = useState("about-me");

  return (
    <div>
      <Project />
    </div>
  );
};

export default Navigation;
