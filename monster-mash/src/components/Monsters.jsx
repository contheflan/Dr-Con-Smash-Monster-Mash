import { Link } from "react-router-dom";
import { baseURL, key } from "../constants";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Monsters = () => {
  const [creations, setCreations] = useState([]);
  useEffect(() => {
    const getCreations = async () => {
      const airtableURL = `${baseURL}/creations`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      });
      setCreations(response.data.records);
    };
    getCreations();
  }, []);
  return (
    <div className="Results-container">
      <Link style={{ textDecoration: "none" }} className="Results-back" to="/">
        Back
      </Link>
      <div>
        <p className="Intro-text">THE GOBLIN HALL OF FAME OR WHATEVER</p>
        {creations.map((creations) => (
          <p className="Results">
            {creations.fields.Name} STR: {creations.fields.STR} DEX:
            {creations.fields.DEX} CON: {creations.fields.CON} INT:
            {creations.fields.INT} WIS: {creations.fields.WIS} CHA:
            {creations.fields.CHA}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Monsters;
