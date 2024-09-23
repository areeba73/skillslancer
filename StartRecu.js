import React from "react";
import "../css/Candidate.css"

const Completion = () => {
  return (
    <div className="completion-container">
      <h2>You're all set!</h2>
      <p>
        Dive into our vast pool of 8M+ candidates eager for their perfect match. 
        Whether you're seeking a seasoned professional or fresh talent, Wellfound offers two seamless paths: 
        <strong> source talent directly</strong> or <strong>post a job for free</strong>. 
        Your journey to discovering standout hires starts here.
      </p>
      <div className="completion-buttons">
        <button className="find-talent-btn"> 
          <span role="img" aria-label="icon">🔍</span> Find Talent
        </button>
        <button className="post-job-btn">
          <span role="img" aria-label="icon">💼</span> Post a Job
        </button>
      </div>
    </div>
  );
};

export default Completion;