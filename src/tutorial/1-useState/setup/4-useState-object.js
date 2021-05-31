import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "random message",
  });

  const [name, setName] = useState("peter");
  const [age, setAge] = useState("24");
  const [message, setMessage] = useState("random message");

  const changeMessage = () => {
    //setPerson({ ...person, message: "hola mundo!" });
    // En este caso el 'spread operator' le indica que al objeto person solo le cambie el campp message
    setMessage("hola mundo!");
  };
  return (
    <>
      {/* <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3> */}
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change message
      </button>
    </>
  );
};

export default UseStateObject;
