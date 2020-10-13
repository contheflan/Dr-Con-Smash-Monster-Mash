import { baseURL, key } from "./constants";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "./Button";
const MutationList = (props) => {
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
  useEffect(() => {
    const getMutation = async () => {
      const response = await axios.get(`${baseURL}/mutations`, {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      });
      const { records } = response.data;
      // we're taking the data and using the .reduce() function on it
      // this function will "reduce" the array to one element, in this case...
      // ...an object with a key for each stat.
      // mutations is now an object with six keys, each of which store the mutations that fall under that stat.
      const newMutations = records.reduce(
        (acc, curr) => {
          acc[curr.fields.TYPE].push(curr);
          return acc;
        },
        {
          STR: [],
          DEX: [],
          CON: [],
          INT: [],
          WIS: [],
          CHA: [],
        }
      );
      props.setMutations(newMutations);
      // need to apply newMutation to the dice roll function
    };
    getMutation();
  }, []);

  const mutationLists = Object.entries(props.mutations).map(([stat, mutas]) => (
    <div className="Mutations">
      <p className="Stat-text">{stat}</p>
      {props.roll[stat] && (
        <p className="mutation-text">{props.roll[stat].fields.Name}</p>
      )}
      {/* THANKS SOLEIL */}

      <Button
        mutas={mutas}
        stat={stat}
        setRoll={props.setRoll}
        randomRoll={props.randomRoll}
        getModifiedFields={getModifiedFields}
        setMonster={props.setMonster}
        monster={props.monster}
      />
    </div>
  ));
  return <div className="Mutation-container">{mutationLists}</div>;
};

export default MutationList;
