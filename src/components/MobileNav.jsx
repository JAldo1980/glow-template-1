import React from "react";
import { Link } from "react-scroll";

function MobileNav() {
  return (
    <>
      <div className="mobile-nav-container">
        <img
          className="logo-img"
          alt="branding-image"
          src="logo-long.png"
        ></img>
        <div className="mobile-title">
          <h1>Build The Portfolio You've Always Wanted</h1>
        </div>

        <div className="nav-items">
          <Link
            to="results" // Replace "impact" with the actual ID of your Impact component
            smooth={true}
            duration={500}
          >
            <h4>Portfolio Templates</h4>
          </Link>
          <Link
            to="benefits" // Replace "benefits" with the actual ID of your Benefits component
            smooth={true}
            duration={500}
          >
            <h4>Portfolio Course</h4>
          </Link>
          <Link
            to="about" // Replace "about" with the actual ID of your About component
            smooth={true}
            duration={500}
          >
            <h4>About</h4>
          </Link>
          <Link
            to="contact" // Replace "contact" with the actual ID of your Contact component
            smooth={true}
            duration={500}
          >
            <h4>Contact</h4>
          </Link>
          <h4 className="book-call-btn">Book a call</h4>
        </div>
        <div className="social-items">
          <h3>Follow</h3>
          <a href="https://www.youtube.com/@ratemyportfolio/videos">
            <img src="youtube-removebg-preview.png" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/jamespalderman/">
            <img
              src="1820468_brand_linkedin_logo_network_social_icon.svg"
              alt="social-media-icon"
              className="social-icon"
            />
          </a>
          <a href="https://www.instagram.com/jamesdoesmarketing/">
            <img src="instagram-symbol.png" className="social-icon" />
          </a>
        </div>
      </div>
    </>
  );
}

export default MobileNav;
