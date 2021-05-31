import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    title = "hola gente!!"
    console.log(title)
    
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Cambiar titulo
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
