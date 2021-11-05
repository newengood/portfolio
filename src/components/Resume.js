import Resume_ from '../images/resume.pdf'

// Render resume
const Resume = () => {
  return (
    <div>
      <iframe src={Resume_} title="resume" width="100%" height="750px"></iframe>
    </div>
  );
};

export default Resume;
