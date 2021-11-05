import React from 'react';
import YourForum from '../docs/your-forum.png';
import TechBlog from '../docs/tech-blog.png';
import FitnessTracker from '../docs/fitness-tracker.png';

// Render project data
const Project = ({ title, githubLink, deploymentLink, imageLink }) => {
  return (
    <div class='flex-row justify-space-around'>
      <div class='card'>
        <div class='card-header'>{title} <h3>Your Forum</h3>
          <div class='card-body'>{imageLink} <img src={YourForum} alt="your-forum"></img>
            <div class='card-footer'>{deploymentLink} <a href="https://tranquil-lowlands-18120.herokuapp.com/">Deployment</a><br></br>
              {githubLink} <a href="https://github.com/newengood/your-forum">Github Repository</a>
            </div>
          </div>
        </div>
      </div>
      <div class='card'>
        <div class='card-header'>{title} <h3>Tech Blog</h3>
          <div class='card-body'>{imageLink} <img src={TechBlog} alt="tech-blog"></img>
            <div class='card-footer'>{deploymentLink} <a href="https://warm-wildwood-58160.herokuapp.com/">Deployment</a><br></br>
              {githubLink} <a href="https://github.com/newengood/tech-blog/">Github Repository</a>
            
            </div>
          </div>
        </div>
      </div>
      <div class='card'>
        <div class='card-header'>{title} <h3>Fitness Tracker</h3>
          <div class='card-body'>{imageLink} <img src={FitnessTracker} alt="fitness-tracker"></img>
            <div class='card-footer'>{deploymentLink} <a href="https://radiant-inlet-63148.herokuapp.com/?id=61794a323ac3bf00167a4ad3/">Deployment</a><br></br>
              {githubLink} <a href="https://github.com/newengood/fitness-tracker/">Github Repository</a>
              
            </div>
          </div>
        </div>
      </div>
    </div>




  );
};

export default Project;
