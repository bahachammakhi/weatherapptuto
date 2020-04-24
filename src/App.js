import React, { useState } from "react";
import logo from "./logo.svg";
import Title from "./components/Title";
import Input from "./components/Input";
import "./App.css";

const copyright = "Created by baha";

function App() {
  const [title, setTitle] = useState("");
  const handleonChange = (value) => {
    setTitle(value);
  };
  return (
    <div className="App">
      <Title
        title={title === "" ? "Meteo App" : title}
        color="green"
        isgreen={false}
      />
      <Input onChange={handleonChange} />
      <div style={{ position: "absolute", bottom: "0", right: "10px" }}>
        <Title title={copyright} color="green" isgreen={true} />
      </div>
    </div>
  );
}

export default App;
