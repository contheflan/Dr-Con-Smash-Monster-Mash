// import { Link } from "react-router-dom";
import { baseURL, key } from "./constants";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MutationList from "./MutationList";
function Create(props) {
  const [roll, setRoll] = useState({});
  useEffect(() => {
    const getMonster = async () => {
      const airtableURL = `${baseURL}/monsters`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      });
      props.setMonster(response.data.records[0].fields);
    };
    getMonster();
  }, []);

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

  return (
    <div className="Monster-Info">
      <h3>ACH!</h3>
      {Object.keys(props.monster).length > 0 && (
        <div>
          <h2>{props.monster.Name}</h2>
          <p>
            STR:{props.monster.STR} DEX:{props.monster.DEX} CON:
            {props.monster.CON} INT:
            {props.monster.INT} WIS:{props.monster.WIS} CHA:
            {props.monster.CHA}
          </p>
          <img className="Monster-portrait"src={props.monster.Image[0].url}></img>
        </div>
      )}
      <MutationList monster={props.monster} setMonster={props.setMonster} mutations={props.mutations} setMutations={props.setMutations} roll={roll} setRoll={setRoll} />
    </div>
  );
}

export default Create;
