import React from "react";
import { Link } from "react-router-dom";
import castle from ".././assets/cherry-castle-rain.gif";
function Intro() {
  return (
    <div className="Intro">
      <img className="Intro-img" src={castle} alt="boo!"></img>
      <p>
        The wind howls and the moor shimmers with the unrelenting storm. You
        take your final sip from your ancestral cask of Cyrodilic Brandy. The
        night is young, it's time to create something... <span>MONSTEROUS</span>
      </p>
      <Link to={"/Create"}>
        <a className="Create-button">CREATE</a>
      </Link>
    </div>
  );
}

export default Intro;
