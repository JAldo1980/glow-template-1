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
          <img
            src="/src/images/11244080_x_twitter_elon musk_twitter new logo_icon.svg"
            alt="social-media-icon"
            className="social-icon"
          />
          <img
            src="/src/images/1820468_brand_linkedin_logo_network_social_icon.svg"
            alt="social-media-icon"
            className="social-icon"
          />
        </div>
      </div>
    </>
  );
}

export default Nav;
