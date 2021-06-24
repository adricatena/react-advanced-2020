import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
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
    } else {
      setError(true);
      setLoading(false);
      throw new Error(response.statusText);
    }
  };

  useEffect(() => {
    getUsers();
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

  return <h2>multiple returns</h2>;
};

export default MultipleReturns;
