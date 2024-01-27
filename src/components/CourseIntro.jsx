import React from "react";

function CourseIntro() {
  return (
    <>
      <div className="benefits-container" id="benefits">
        <h2>Portfolio Course</h2>
        <div className="benefit-card">
          <h3>Course Selling Point One</h3>
          <p>Snippet of course information goes here.</p>
        </div>
        <div className="benefit-card">
          <h3>Course Selling Point Two</h3>
          <p>Snippet of course information goes here.</p>
        </div>
        <div className="benefit-card">
          <h3>Course Selling Point Three</h3>
          <p>Snippet of course information goes here.</p>
        </div>
        <div className="benefit-card">
          <button id="course-info-btn">More details</button>
        </div>
      </div>
    </>
  );
}

export default CourseIntro;
