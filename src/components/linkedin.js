import React from "react";
const NewComponent = () => {
  return (
    <div className="linkedin">
      <div className="linkedin-heading">
        <h1 className="about-me">My Linkedin feed</h1>
        <span className="linkedin-line"></span>
        <h2 className="linkedin-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </h2>
      </div>
      <div className="linkedin-feed">
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6939209628685602817"
          height="400"
          width="450"
          frameborder="0"
          allowfullscreen=""
          title="Embedded post"
        ></iframe>
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:6968383591521157120"
          height="400"
          width="450"
          frameborder="0"
          allowfullscreen=""
          title="Embedded post"
        ></iframe>
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:6928919543281041408"
          height="400"
          width="450"
          frameborder="0"
          allowfullscreen=""
          title="Embedded post"
        ></iframe>
      </div>
      <div className="linkedin-button">
        <button
          className="linkedin-connect-button">
          <a href="https://www.linkedin.com/in/nandine/">Show More</a>
        </button>
      </div>
    </div>
  );
};

export default NewComponent;
