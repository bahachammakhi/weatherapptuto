import React from "react";

const TodayWeather = ({ data }) => {
  const { country, name, population } = data?.city;
  const today = data.list[0];
  const { temp, humidity } = today.main;
  const { description, icon } = today.weather[0];
  return (
    <div style={{ display: "flex", width: "80vw", padding: "10vw" }}>
      <div style={{ display: "flex", flexDirection: "column", width: "30vw" }}>
        <h2>{name}</h2>
        <span> {country}</span>
        <p style={{ color: "gray" }}>{description}</p>
        <p>Humidity : {humidity}</p>
      </div>
      <div style={{ width: "30vw" }}>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="icon"
        />
        <p style={{ fontWeight: "bolder" }}>{temp}°</p>
      </div>
    </div>
  );
};

export default TodayWeather;
