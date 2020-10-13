import React, { useState } from "react";
import { Route } from "react-router";
import Intro from "./components/Intro";
import Create from "./components/Create";
// import Results from "./Results";
import "./App.css";

function App() {
  const [mutations, setMutations] = useState({});
  const [monster, setMonster] = useState({});
  const randomRoll = (array) => Math.floor(Math.random() * array.length);
  return (
    <div className="App">
      <Route exact path="/">
        <Intro />
      </Route>
      <Route exact path="/Create">
        <Create
          randomRoll={randomRoll}
          monster={monster}
          setMonster={setMonster}
          mutations={mutations}
          setMutations={setMutations}
        />
      </Route>
    </div>
  );
}

export default App;
