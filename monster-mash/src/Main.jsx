import React, { useState } from "react";
import { Link } from "react-router-dom";
import { baseURL } from "./constants";

function Main(props) {
  return (
    <div>
      <h3>ACH!</h3>

      {props.monster && (
        <div>
          <h2>{props.monster.Name}</h2>
          <p>
            STR:{props.monster.STR} DEX:{props.monster.DEX} CON:
            {props.monster.CON} INT:
            {props.monster.INT} WIS:{props.monster.WIS} CHA:
            {props.monster.CHA}
          </p>
        </div>
      )}
    </div>
  );
}

export default Main;
