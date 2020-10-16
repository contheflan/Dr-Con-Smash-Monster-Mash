import { baseURL, key } from "../constants";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "./Button";

// Whenever a mutation is roll, check to see if any stat is modified from the roll (in this case, every stat adds a modifier to the previous stat, some just have 0 values to keep it to 1-2 stats modified per mutation)
const MutationList = (props) => {
  const [mutations, setMutations] = useState({});
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

  // The big Kahuna. Taking a large list of mutations from the MUTATIONS airtable and reducing it down to 10 mutations seperated by type (STR, DEX, CON etc.)
  useEffect(() => {
    const getMutation = async () => {
      const response = await axios.get(`${baseURL}/mutations`, {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      });
      const { records } = response.data;
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
      setMutations(newMutations);
    };
    getMutation();
  }, []);

  // THANKS SOLEIL WHEW


  // rendering more components to the Create page. In this case we are establishing every 
  // mutation from the reduced list organized by the individual stat, and randomly selecting 
  // one mutation from the mutations object per stat. Then we store every result in a button.

  let i = 1;
  const mutationLists = Object.entries(mutations).map(([stat, mutas]) => (
    <div key={i++} className="Mutation">
      <p className="Stat-text">{stat}</p>
      {props.roll[stat] && <p className="Mutation-text">{props.roll[stat].fields.Name}</p>}
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
  return <div>{mutationLists}</div>;
};

export default MutationList;
