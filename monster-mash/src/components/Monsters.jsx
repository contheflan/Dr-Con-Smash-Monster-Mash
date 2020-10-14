import { Link } from "react-router-dom";
import { baseURL, key } from "../constants";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Monsters = () => {
  const [creations, setCreations] = useState([])
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
    <>
    <Link style={{ textDecoration: "none" }} className="Back" to="/">
    Back
  </Link>

    <div>
      {creations.map((creations) => (
          <p>{creations.fields.Name}</p>
        
      ))}
      </div>
      </>
  );
};

export default Monsters;