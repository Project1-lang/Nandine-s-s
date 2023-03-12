import React from "react";
import "./about.css";
import Mine from "../assets/img/image.jpg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-heading">
        <h1 className="about-me">About me</h1>
        <span className="about-line"></span>
      </div>
      <div className="about-section">
        <p>
          <span>I'm Nandine </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          dignissimos ab veritatis iste cumque laborum, officiis fugit enim
          consequatur, repellendus minus exercitationem necessitatibus sed autem
          nostrum optio nihil eius non quas voluptatem corrupti alias ex!
          Aperiam, ipsa. Ratione, consectetur quos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          dignissimos ab veritatis iste cumque laborum, officiis fugit enim
          consequatur, repellendus minus exercitationem necessitatibus sed autem
          nostrum optio nihil eius non quas voluptatem corrupti alias ex!
          Aperiam, ipsa. Ratione, consectetur quos quos.
        </p>
      </div>
      <div className="about-connect">
        <button className="about-connect-button">Download CV</button>
        <button className="about-connect-button" href="#projects">
          Projects
        </button>
      </div>
    </div>
  );
};

export default About;
