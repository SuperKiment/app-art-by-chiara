import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import GetOneProduit from "./api.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [oneProduit, setOneProduit] = useState();

  useEffect(() => {
    GetOneProduit("123456").then((rep) => {
      setOneProduit(rep);
    });
  }, []);

  console.log(oneProduit);

  return (
    <>
      <h1>Coucoucou</h1>

      <button
       >

      </button>
      
    </>
  );
}

export default App;
