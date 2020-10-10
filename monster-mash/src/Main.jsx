import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL, key } from "./constants";

function Main() {
  const [monster, setMonster] = useState("");
  const [mutation, setMutation] = useState("");

  // const [getLocalMonster, setLocalMonster] = useState([
  //   {
  //     name: "Goblin",
  //     STR: 8,
  //     DEX: 14,
  //     CON: 10,
  //     INT: 10,
  //     WIS: 8,
  //     CHA: 8,
  //   }
  // ]);
  useEffect(() => {
    // const getMonster = async () => {
    //   const airtableURL = `${baseURL}/monsters`;
    //   const response = await axios.get(airtableURL, {
    //     headers: {
    //       Authorization: `Bearer ${key}`,
    //     },
    //   });
    //   setMonster(response.data.records[0].fields);
    // };
    // getMonster();
    const newMutation = async () => {
      const airtableURL = `${baseURL}/MUTATIONS`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      });
      setMutation(response.data.records);
      // console.log(response.data.records);
    };
    newMutation();
  }, []);
  return (
    <div>
      <h3>ACH!</h3>
      {mutation &&
        mutation
          .filter((field) => field.TYPE === "STR")
          .map((strMonster) => <p>{strMonster.Name}</p>)}
      {monster && (
        <div>
          <h2>{monster.Name}</h2>
          <p>
            STR:{monster.STR} DEX:{monster.DEX} CON:
            {monster.CON} INT:
            {monster.INT} WIS:{monster.WIS} CHA:
            {monster.CHA}
          </p>
          <p>{monster.Image.id}</p>
        </div>
      )}
    </div>
  );
}

export default Main;
