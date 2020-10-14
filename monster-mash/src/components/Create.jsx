import { Link } from "react-router-dom";
import { baseURL, key } from "../constants";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MutationList from "./MutationList";

function Create(props) {
  const [roll, setRoll] = useState({});
  const [name, setName] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    let { CREATIONS, Name, Image, ...monsterFields } = props.monster;
    let fields = {
      Monster: props.monsterId,
      Name: name,
      ...monsterFields,
    };
    await axios.post(
      `${baseURL}/creations`,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      }
    );
  };
  useEffect(() => {
    const getMonster = async () => {
      const airtableURL = `${baseURL}/monsters?sort%5B0%5D%5Bfield%5D=Name&sort%5B0%5D%5Bdirection%5D=desc`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      });
      props.setMonster(response.data.records[0].fields);
      props.setMonsterId([response.data.records[0].id]);
    };
    getMonster();
  }, []);

  return (
    <div>
      <header>
        <Link style={{ textDecoration: "none" }} className="Back" to="/">
          Back
        </Link>
        Spice up this boring ol' {props.monster.Name} with wild and weird new
        abilities! Click on each attribute to mutate and augment its mundane
        stats. Have fun!`
      </header>
      <div className="Create-div">
        <div className="Monster-div">
          {Object.keys(props.monster).length > 0 && (
            <div>
              <p className="Monster-name">{props.monster.Name}</p>
              <div>
                <p className="Monster-stats">
                  {" "}
                  STR:{props.monster.STR} DEX:{props.monster.DEX} CON:{" "}
                  {props.monster.CON} INT:{props.monster.INT} WIS:
                  {props.monster.WIS} CHA:{props.monster.CHA}
                </p>
              </div>
              <div>
                <img
                  className="Monster-portrait"
                  src={props.monster.Image[0].url}
                ></img>
              </div>
              <footer>
                <form onSubmit={handleSubmit}>
                  <input
                    className="Monster-entry"
                    type="text"
                    placeholder="ENTER NAME HERE BLEHHH"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                  <button className="Mutation-button">
                    PUBLISH YOUR ABOMINATION
                  </button>
                </form>
              </footer>
            </div>
          )}
        </div>
        <div>
          <MutationList
            className="Mutations"
            randomRoll={props.randomRoll}
            monster={props.monster}
            setMonster={props.setMonster}
            mutations={props.mutations}
            setMutations={props.setMutations}
            roll={roll}
            setRoll={setRoll}
          />
        </div>
      </div>
    </div>
  );
}
export default Create;
