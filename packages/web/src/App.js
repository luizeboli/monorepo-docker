import React, { useState, useEffect } from "react";
import log from "@project/common";

const App = () => {
  const [res, setRes] = useState({});

  useEffect(() => {
    fetch("http://localhost:3333/")
      .then((res) => res.json())
      .then((res) => {
        log(res);
        setRes(res);
      });
  }, []);

  return (
    <>
      <h1>Requesting from API (http://localhost:3333):</h1>
      <h2>{JSON.stringify(res)}</h2>
    </>
  );
};

export default App;
