import React, { useState, useEffect, Fragment } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <button className="btn" onClick={() => setShow(!show)}>
        Show/hide
      </button>
      {show && <Item />}
    </Fragment>
  );
};

const Item = () => {
  // valor de inicio para el hook
  const [size, setSize] = useState(window.innerWidth);
  // fcion que se ejecuta cada vez que se cambia el ancho
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>Window</h1>
      <h2>size: {size} px</h2>
    </div>
  );
};

export default ShowHide;
