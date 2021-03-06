import { Link, withRouter } from "react-router-dom";
import { baseURL, key } from "../constants";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MutationList from "./MutationList";

// Huge thanks to Misha for helping me construct and implement
// this whole mess o' code and working out all the kinks

function Create(props) {
  const [monster, setMonster] = useState({});
  const [monsterId, setMonsterId] = useState([]);
  const [roll, setRoll] = useState({});
  const [name, setName] = useState("");

  // handle submit for entering in your new creation's name! Posts the form to the CREATIONS airtable.
  const handleSubmit = async (event) => {
    event.preventDefault();
    let { CREATIONS, Name, Image, ...monsterFields } = monster;
    let fields = {
      Monster: monsterId,
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
    props.history.push("/Monsters");
  };

// useEffect for grabbing the monster base image and stats from the MONSTERS airtable (just Goblin for now)
  useEffect(() => {
    const getMonster = async () => {
      const airtableURL = `${baseURL}/monsters?sort%5B0%5D%5Bfield%5D=Name&sort%5B0%5D%5Bdirection%5D=desc`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      });
      setMonster(response.data.records[0].fields);
      setMonsterId([response.data.records[0].id]);
    };
    getMonster();
  }, []);

// Rendering components to the create page and linking back to the intro page.
  return (
    <div className="Create-container">
      <header>
        <div>
        <Link style={{ textDecoration: "none" }} className="Back" to="/">
          Back
        </Link>
        </div>
        Spice up this boring ol' {monster.Name} with wild and weird new
        abilities! Click on each attribute to mutate and augment its mundane
        stats. Have fun!
      </header>
      <div className="Create-div">
        {Object.keys(monster).length > 0 && (
          <div className="Monster-container">
            <p className="Monster-name">{monster.Name}</p>
            <div>
              <p className="Monster-stats">
                {" "}
                STR:{monster.STR} DEX:{monster.DEX} CON:{monster.CON} INT:
                {monster.INT} WIS:
                {monster.WIS} CHA:{monster.CHA}
              </p>
            </div>
            <div>
              <img
                alt="boohoo"
                className="Monster-portrait"
                src={monster.Image[0].url}
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
          <button className="Mutation-button">PUBLISH YOUR ABOMINATION</button>
        </form>
      </footer>
          </div>
        )}
      <div className="Mutation-container">
        <MutationList
          randomRoll={props.randomRoll}
          monster={monster}
          setMonster={setMonster}
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
export default withRouter(Create);
