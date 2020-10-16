import React, { useState } from "react";

// Another idea another nightmare. Each of the six buttons (one for each stat) are individually 
// toggling off once selected to stop the player from spamming multiple mutations
const Button = (props) => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      {toggle && (
        <button className="Mutation-button"
          onClick={() => {
            const updatedStat = props.mutas[props.randomRoll(props.mutas)];
            props.setRoll((prevRoll) => ({
              ...prevRoll,
              [props.stat]: updatedStat,
            }));
            const updatedMonster = { ...props.monster };
            props
              .getModifiedFields(updatedStat.fields.Name)
              .forEach(
                (mutas) => (updatedMonster[mutas] += updatedStat.fields[mutas])
              );
            props.setMonster(updatedMonster);
            setToggle(false);
          }}
        >
          MUTATE.. MUTATE!
        </button>
      )}
    </>
  );
};
export default Button;

// Thanks for Shay for the suggestion to move the button into it's own component.