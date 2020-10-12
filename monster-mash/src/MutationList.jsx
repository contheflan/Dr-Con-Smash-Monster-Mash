import React from 'react';

const MutationList = (props) => {
  const randomRoll = (array) => Math.floor(Math.random()* array.length)
  const mutationLists = Object.entries(props.mutations).map(([stat, mutas]) => (
    <div className="Mutations">
      <h4>{stat}</h4>
      {props.roll[stat] &&
        <h5>{props.roll[stat].fields.Name}</h5>}
      <button onClick={() => props.setRoll(prevRoll => ({ ...prevRoll, [stat]: mutas[randomRoll(mutas)]}))}>ROLL</button>
    </div>
  ));
  return (
    <div>
      {mutationLists}
    </div>
  );
};

export default MutationList;