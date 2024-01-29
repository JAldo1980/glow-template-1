import React from "react";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-socials">
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
          <a href="https://www.tiktok.com/@portfolio_reviews">
            <img src="tik-tok.png" className="social-icon" />
          </a>
        </div>
        <p>
          Portfolio Forge | James Alderman © 2024 | Part of The Alderman
          Technology Group Limited (ATG) Company number: 15450508 | All Rights
          Reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
