import React, { useState } from 'react';
import Project from './Project';

const Portfolio = () => {

  const title = "";
  const githubLink = "";
  const deploymentLink = "";
  const imageLink = "";

  return (
    <div>
      <Project title={title} githubLink={githubLink} deploymentLink={deploymentLink} imageLink={imageLink} />
    </div>
  );
};

export default Portfolio;
