import React from "react";

function About() {
  return (
    <>
      <div className="about-container">
        <h2>How it Started</h2>
        <div className="about-inner-container">
          <div classname="about-text-container">
            <p>
              Hailing from the United Kingdom and entrenched in the tech
              recruitment domain, my journey has been one of innovation and
              entrepreneurship.
            </p>
            <br />
            <p>
              My mission is clear: to seamlessly bridge top-tier tech talent
              with pioneering opportunities, reshaping professional trajectories
              and influencing the future of technology.
            </p>
            <br />
            <p>
              My passion extends to the cultivation of diverse, high-performing
              teams — a cornerstone of my commitment to advancing the tech
              industry. A fervent advocate for career elevation, I am driven by
              the belief that success is not only achieved individually but
              through collaborative efforts.
            </p>
            <br />
            <p>
              Let's embark on this journey together, navigating the dynamic
              landscape of tech recruitment, and shaping a future where
              diversity thrives. Join me in transforming careers and making an
              indelible mark on the tech industry.
            </p>
          </div>
          <div className="about-image-container">
            <img
              className="about-image"
              src="./src/images/person-img.png"
              alt=""
            />
          </div>
        </div>

        <div className="benefit-links">
          <a href="">My Results</a>
          <a href="">Frequently Asked Questions</a>
        </div>
      </div>
    </>
  );
}

export default About;
