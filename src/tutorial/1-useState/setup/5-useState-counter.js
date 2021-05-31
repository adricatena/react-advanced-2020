import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };
  const complexIncrease = () => {
    setTimeout(() => {
      //setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem" }}>
        <h2>Contador regular</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Restar
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Sumar
        </button>
      </section>
      <section style={{ margin: "4rem" }}>
        <h2>Contador complejo</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          Sumar despues
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
