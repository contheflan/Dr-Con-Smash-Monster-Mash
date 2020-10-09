import React from "react";
import { Link } from "react-router-dom";

function Main(props) {
  return (
    <div>
      <h3>ACH!</h3>
      <div>
        {props.monster.map((bird) => (
          // map function that assigns "bird" to the object so we can get the name and image of the index of the array of objects
          <Link to={`/bird/${bird.name}`}>
            <img src={bird.image} />
            {/* using string interpolation to grab the bird path and image and render it to the DOM */}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Main;