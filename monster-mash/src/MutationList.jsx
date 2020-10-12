import React from "react";
import Create from "./Create";
const MutationList = (props) => {
  // const [button, setButton] = useState(true);
  const randomRoll = (array) => Math.floor(Math.random() * array.length);
  // const changeStat = (modifier) => modifier + (props.monster.fields.stat);
  const mutationLists = Object.entries(props.mutations).map(([stat, mutas]) => (
    <div className="Mutations">
      <p className="Stat-text">{stat}</p>
      {props.roll[stat] && <p className="mutation-text">{props.roll[stat].fields.Name}</p>}
      {/* THANKS SOLEIL */}
      <button className="Mutation-button"
        onClick={() => {
          // props.setMutations((prevMutation) => ({
          //   ...prevMutation, [stat]: mutas[randomRoll(mutas)],
          // }))
          props.setRoll((prevRoll) => ({
            ...prevRoll,
            [stat]: mutas[randomRoll(mutas)],
          }));
        }}
      >
        ROLL
      </button>
    </div>
  ));
  return <div>{mutationLists}</div>;
};

export default MutationList;
