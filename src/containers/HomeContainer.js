import React, { useState } from "react";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";

const copyright = "Created by baha";

function HomeContainer() {
  const [title, setTitle] = useState("");
  const handleonChange = (value) => {
    setTitle(value);
  };
  return (
    <div className="home">
      <Title
        title={title === "" ? "Meteo App" : title}
        color="green"
        isgreen={false}
      />
      <Input onChange={handleonChange} />
      <Button>Get the weather near me </Button>
      <div style={{ position: "absolute", bottom: "0", right: "10px" }}>
        <Title title={copyright} color="green" isgreen={true} />
      </div>
    </div>
  );
}

export default HomeContainer;
