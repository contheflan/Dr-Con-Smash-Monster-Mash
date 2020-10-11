// import { Link } from "react-router-dom";
import { baseURL, key } from "./constants";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Main() {
  const [mutations, setMutations] = useState({});
  const [monster, setMonster] = useState("");
  useEffect(() => {
    const getMutation = async () => {
      const response = await axios.get(`${baseURL}/mutations`, {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      });
      // so here we're assuming we've got the data from airtable
      console.log(response.data);
      const { records } = response.data;
      // we're taking the data and using the .reduce() function on it
      // this function will "reduce" the array to one element, in this case...
      // ...an object with a key for each stat.
      // mutations is now an object with six keys, each of which store the mutations
      // that fall under that stat.
      const newMutations = records.reduce(
        (acc, curr) => {
          // using bracket notation to say acc['CHA'] for example
          acc[curr.fields.TYPE].push(curr);
          return acc;
        },
        {
          CHA: [],
          DEX: [],
          STR: [],
          CON: [],
          INT: [],
          WIS: [],
        }
      );
      setMutations(newMutations);
    };
    getMutation();
  }, []);

  useEffect(() => {
    const getMonster = async () => {
      const airtableURL = `${baseURL}/monsters`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      });
      setMonster(response.data.records[0].fields);
    };
    getMonster();
  }, []);
  console.log(mutations);
  const mutationLists = Object.entries(mutations).map(([stat, mutas]) => (
    <div>
      <h4>{stat}</h4>
      <ul>
        {mutas.map((muta) => (
          <p>
            {muta.fields.Name}, {muta.fields.CON}
          </p>
        ))}
      </ul>
    </div>
  ));
  console.log(monster);
  return (
    <div>
      <h3>ACH!</h3>
      {monster && (
        <div>
          <h2>{monster.Name}</h2>
          <p>
            STR:{monster.STR} DEX:{monster.DEX} CON:
            {monster.CON} INT:
            {monster.INT} WIS:{monster.WIS} CHA:
            {monster.CHA}
          </p>
          <img src={monster.Image[0].url}></img>
        </div>
      )}
      <div>{mutationLists}</div>
    </div>
  );
}

export default Main;
