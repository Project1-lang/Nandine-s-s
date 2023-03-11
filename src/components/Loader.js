import React from "react";
import Loadergif from "../assets/img/loader.gif";
import "./loader.css";
const Loader = () => {
  return (
    <div className="loader">
      <img src={Loadergif} className="image" alt="loader" />
    </div>
  );
};

export default Loader;
