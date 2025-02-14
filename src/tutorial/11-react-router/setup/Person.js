import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  console.log(useParams());
  // const [name, setName] = useState("default name");
  const { id } = useParams();
  // useEffect(() => {
  //   const newPerson = data.find((person) => person.id === parseInt(id));
  //   setName(newPerson.name)
  // }, []);
  return (
    <div>
      <h1>{data.find((person) => person.id === parseInt(id)).name}</h1>
      <Link to="/people" className="btn">
        Back to people
      </Link>
    </div>
  );
};

export default Person;
