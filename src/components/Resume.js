import MyResume from '../docs/Taylor-R-Anderson.pdf';

// Render resume
const Resume = () => {
  return (
    <div>
      <iframe src={MyResume} title="resume" width="100%" height="750px"></iframe>
    </div>
  );
};

export default Resume;
