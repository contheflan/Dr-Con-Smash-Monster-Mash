import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router";
import axios from "axios";
import { baseURL, key } from "./constants";
import Main from "./Main";
import Results from "./Results";
import "./App.css";

function App() {
  const [monster, setMonster] = useState("");
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
    const getMonster = async () => {
      const airtableURL = baseURL;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      });
      setMonster(response.data.records[0].fields);
    };
    getMonster();
  });

  return (
    <div className="App">
      <body>
        <h1>Hello Gore-ld</h1>
        {monster && (
          <div>
            <h2>{monster.Name}</h2>
            <p>
              STR:{monster.STR} DEX:{monster.DEX} CON:{monster.CON} INT:
              {monster.INT} WIS:{monster.WIS} CHA:{monster.CHA}
            </p>
          </div>
        )}
      </body>
    </div>
  );
}

export default App;
