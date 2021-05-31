import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState('hola mundo!'));
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler);

  const [text, setText] = useState("Titulo random");
  //por convencion los nombre del par de retorno es [texto, setTexto], o [palabra, setPalabra]
  const handleClick = () => {
    if(text ==="Titulo random"){
      setText("Hola mundo!");
    }else{
      setText("Titulo random");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Cambiar titulo
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
