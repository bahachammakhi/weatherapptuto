import React from "react";

const TodayWeather = () => {
  return (
    <div style={{ display: "flex", width: "80vw", padding: "10vw" }}>
      <div style={{ display: "flex", flexDirection: "column", width: "30vw" }}>
        <h2>tunis</h2>
        <span> country</span>
        <p style={{ color: "gray" }}>description</p>
        <p>Humidity : 70</p>
      </div>
      <div style={{ width: "30vw" }}>
        <img src="" alt="icon" />
        <p style={{ fontWeight: "bolder" }}>17</p>
      </div>
    </div>
  );
};

export default TodayWeather;
