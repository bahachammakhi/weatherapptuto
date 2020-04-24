import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TodayWeather from "../components/TodayWeather";
import axios from "axios";

const WeatherDetails = () => {
  const { city } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const apikey = "3d276dd0248a8f6d4a15500dc0dec11a";
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`
      )
      .then((data) => {
        console.log("data", data);
        setData(data.data);
        setLoading(false);
        setError(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading</h1>
      ) : error ? (
        <h1>Wrong city or connection problem</h1>
      ) : (
        <div>
          <TodayWeather />{" "}
        </div>
      )}
    </div>
  );
};

export default WeatherDetails;
