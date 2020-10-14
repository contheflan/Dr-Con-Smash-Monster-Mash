import React from "react";
import { Route } from "react-router";
import Intro from "./components/Intro";
import Create from "./components/Create";
import Monsters from "./components/Monsters";
import "./App.css";

function App() {
  const randomRoll = (array) => Math.floor(Math.random() * array.length);
  return (
    <div className="App">
      <Route exact path="/">
        <Intro />
      </Route>
      <Route exact path="/Create">
        <Create
          randomRoll={randomRoll}
        />
      </Route>
      <Route exact path="/Monsters">
        <Monsters />
      </Route>
    </div>
  );
}

export default App;
