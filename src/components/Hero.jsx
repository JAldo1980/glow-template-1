import React from "react";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="headline-name">
          <h1>
            Joe <span>Bloggs</span>
          </h1>
        </div>
        <div className="subheader">
          <h3>
            Founder | Transforming careers and shaping the future of tech.
            Passionate about building diverse, high-performing teams.
          </h3>
        </div>
        <div className="hero-image-container">
          <img
            src="/src/images/hero-img.png"
            className="hero-img"
            alt="hero-image"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
