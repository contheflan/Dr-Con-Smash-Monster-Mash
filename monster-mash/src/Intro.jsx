import React from "react";
import { Link, Route } from "react-router-dom";

function Intro() {
  return (
    <div>
      <h3>Intro text blehh</h3>
      <div>
        <Link to={"/Main"}>
          <p>CREATE</p>
        </Link>
      </div>
    </div>
  );
}

export default Intro;
