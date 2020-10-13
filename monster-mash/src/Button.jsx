import React, { useState } from "react";

const Button = (props) => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      {toggle && (
        <button
          className="Mutation-button"
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
          NEW MUTATION
        </button>
      )}
    </>
  );
};
export default Button;
