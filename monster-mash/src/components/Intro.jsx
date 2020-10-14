import React from "react";
import { Link } from "react-router-dom";
import castle from ".././assets/cherry-castle-rain.gif";
function Intro() {
  return (
    <div className="Intro">
      <div className="Intro-image-container">
        <img className="Intro-img" src={castle} alt="boo!"></img>
      </div>
      <div className="Intro-container">
        <p className="Intro-text">
          The wind howls and the moor shimmers with the unrelenting storm. You
          take your final sip from your ancestral cask of Cyrodilic Brandy. The
          night is young, it's time to create something...{" "}
          <span>MONSTROUS</span>
        </p>
      </div>
      <Link className="Create-button" to={"/Create"}>
        CREATE
      </Link>
    </div>
  );
}

export default Intro;
