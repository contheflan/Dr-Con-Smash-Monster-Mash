import { Link } from "react-router-dom";
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

  return (
    <div className="Monster-info">
      <Link className="Back" to="/">Back</Link>
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
      <MutationList remove={props.remove} removeButton={props.removeButton} setRemoveButton={props.setRemoveButton} randomRoll={props.randomRoll} monster={props.monster} setMonster={props.setMonster} mutations={props.mutations} setMutations={props.setMutations} roll={roll} setRoll={setRoll} />
    </div>
  );
}

export default Create;
