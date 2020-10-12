import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router";
import axios from "axios";
import { baseURL, key } from "./constants";
import Intro from "./Intro";
import Create from "./Create";
import Results from "./Results";
import "./App.css";

function App() {
  return (
    <div className="App">
        <Route exact path="/">
          <Intro />
        </Route>
        <Route exact path="/Create">
          <Create />
        </Route>
    </div>
  );
}

export default App;
