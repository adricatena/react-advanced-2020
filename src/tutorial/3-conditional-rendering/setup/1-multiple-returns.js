import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarsons";

const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  //  Podemos setearlo por defecto como true y luego cuando se cargue darle false, o iniciarlo false y cuando empiece la carga darle true
  //const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState("default user");

  const getUsers = async () => {
    //setLoading(true);
    const response = await fetch(url);
    if (response.status >= 200 && response.status < 300) {
      const user = await response.json();
      setUser(user.name);
      setLoading(false);
      setError(false);
    } else {
      setError(true);
      setLoading(false);
      throw new Error(response.status);
    }
  };

  useEffect(() => {
    getUsers().catch((error) => {
      console.log(error);
    });
    //  Al error lo podemos manejar con un try...catch como a su vez derecho con un catch cuando hacemos la peticion
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{user}</h1>
      </div>
    );
  }
};

export default MultipleReturns;
