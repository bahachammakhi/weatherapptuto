import React, { useState } from "react";
import Title from "../components/Title";
import Input from "../components/Input";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";

const copyright = "Created by baha";

function HomeContainer() {
  const [city, setCity] = useState("");
  const history = useHistory();
  const handleonChange = (value) => {
    setCity(value);
  };
  return (
    <div className="home">
      <Title title={"Weather App"} color="green" isgreen={false} />
      <Input onChange={handleonChange} />
      <Button onClick={() => history.push(`/weather/${city}`)}>
        Get the weather near me{" "}
      </Button>
      <div style={{ position: "absolute", bottom: "0", right: "10px" }}>
        <Title title={copyright} color="green" isgreen={true} />
      </div>
    </div>
  );
}

export default HomeContainer;
