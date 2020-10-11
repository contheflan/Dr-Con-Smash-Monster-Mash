import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router";
import axios from "axios";
import { baseURL, key } from "./constants";
import Intro from "./Intro";
import Main from "./Main";
import Results from "./Results";
import "./App.css";

function App() {
  return (
    <div className="App">
      <body>
        <h1>Hello Gore-ld</h1>
        <Route exact path="/">
          <Intro />
        </Route>
        <Route exact path="/Main">
          <Main />
        </Route>
      </body>
    </div>
  );
}

export default App;
