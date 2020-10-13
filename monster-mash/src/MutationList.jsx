import React from "react";
import Create from "./Create";
const MutationList = (props) => {
  // const [button, setButton] = useState(true);
  const randomRoll = (array) => Math.floor(Math.random() * array.length);
  const getModifiedFields = (fieldName) => {
    const modifiedFields = [];
    if (fieldName.includes("STR")) {
      modifiedFields.push("STR");
    }
    if (fieldName.includes("DEX")) {
      modifiedFields.push("DEX");
    }
    if (fieldName.includes("CON")) {
      modifiedFields.push("CON");
    }
    if (fieldName.includes("INT")) {
      modifiedFields.push("INT");
    }
    if (fieldName.includes("WIS")) {
      modifiedFields.push("WIS");
    }
    if (fieldName.includes("CHA")) {
      modifiedFields.push("CHA");
    }
    return modifiedFields;
  };

  const mutationLists = Object.entries(props.mutations).map(([stat, mutas]) => (
    <div className="Mutations">
      <p className="Stat-text">{stat}</p>
      {props.roll[stat] && (
        <p className="mutation-text">{props.roll[stat].fields.Name}</p>
      )}
      {/* THANKS SOLEIL */}
      <button
        className="Mutation-button"
        onClick={() => {
          const updatedStat = mutas[randomRoll(mutas)];
          props.setRoll((prevRoll) => ({
            ...prevRoll,
            [stat]: updatedStat,
          }));
          const updatedMonster = { ...props.monster };
          getModifiedFields(updatedStat.fields.Name).forEach(
            (mutas) => (updatedMonster[mutas] += updatedStat.fields[mutas])
          );
          props.setMonster(updatedMonster);
        }}
      >
        ROLL
      </button>
    </div>
  ));
  return <div>{mutationLists}</div>;
};

export default MutationList;
