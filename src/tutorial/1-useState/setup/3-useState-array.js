import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  // el useState se puede importar derecho en la variable si sabemos que lo vamos a utilizar solo una vez dentro del componente
  const removeItem = (id) => {
    //let newPeople = people.filter((person) => person.id !== id);
    //setPeople(newPeople);
    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id);
      return newPeople;
    });
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Eliminar items
      </button>
    </>
  );
};

export default UseStateArray;
