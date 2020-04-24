import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TodayWeather from "../components/TodayWeather";
import axios from "axios";
import WeatherDays from "../components/WeatherDays";

const WeatherDetails = () => {
  const { city } = useParams();
  const [loading, setLoading] = useState(true);
  const [daylist, setDaylist] = useState([]);
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const apikey = "3d276dd0248a8f6d4a15500dc0dec11a";

  const WeatherDaysList = daylist.map((el) => {
    return <WeatherDays data={el} />;
  });
  const getEveryDayFirst3hoursWeather = (array) => {
    let count = 0;
    let result = [];
    array.forEach((element, index) => {
      if (index - 8 === count || (count === 0 && index === 0)) {
        count = index;
        result.push(element);
      }
    });
    return result;
  };
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=metric`
      )
      .then((data) => {
        setDaylist(getEveryDayFirst3hoursWeather(data.data.list));
        setData(data.data);
        setLoading(false);
        setError(false);
      })
      .catch((e) => {
        setError(true);
        setLoading(false);
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
          <TodayWeather data={data} /> {WeatherDaysList}
        </div>
      )}
    </div>
  );
};

export default WeatherDetails;
