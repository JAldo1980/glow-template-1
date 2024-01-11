import React from "react";

function Nav() {
  return (
    <>
      <div className="nav-container">
        <img
          className="logo-img"
          alt="branding-image"
          src="/src/images/logo-placeholder.png"
        ></img>
        <div className="nav-items">
          <h4>About</h4>
          <h4>Impact</h4>
          <h4>Benefits</h4>
          <h4>Contact</h4>
        </div>
        <div className="social-items">
          <h3>Follow</h3>
          <img src="" alt="social-media-icon" />
          <img src="" alt="social-media-icon" />
        </div>
      </div>
    </>
  );
}

export default Nav;
