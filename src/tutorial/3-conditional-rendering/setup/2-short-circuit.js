import React, { Fragment, useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";
  console.log(`firstValue: ${firstValue}, secondValue: ${secondValue}`);

  return <Fragment>
    <h1>{text || "juancito"} </h1>
    <h1>{text && "hello world"} </h1>
    {text && <h3>hello world 3</h3>}
    {!text && <h3>hello world 4</h3>}
  </Fragment>;
};

export default ShortCircuit;
