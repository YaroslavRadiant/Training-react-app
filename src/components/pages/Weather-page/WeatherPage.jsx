import React, { useState } from "react";
import getWeatherData from "../../../API/api";
import Input from "../../input/Input";
import HistoryListComponent from "./HistoryListComponent/HistoryListComponent";
import "./Weather.css";

export default function WeatherPage() {
  const [searchCountryInputValue, setSearchCountryInputValue] = useState(" ");
  const [countryInfo, setCountryInfo] = useState(null);
  const [searchingHistory, setSearchingHistory] = useState([]);


  console.log(searchingHistory);

  function settingSearchCountryInputValue(event) {
    setSearchCountryInputValue(event.target.value);
  }

  // Get data from router history? match?
  function addWeatherToState() {
    getWeatherData(searchCountryInputValue)
      .then((res) => {
        setCountryInfo(res);
        setSearchingHistory([...searchingHistory, res]);

      })
  }

  return (
    <div>
      <Input
        name={"Chose yor city"}
        value={searchCountryInputValue}
        onChange={settingSearchCountryInputValue}
      />
      <button onClick={addWeatherToState}>Do something</button>
      <div className="countryInfoContainer">
        {countryInfo ? (
          <div className="countryInfo">
            <h1>{countryInfo.name}</h1>
            <p>{countryInfo.main.temp}</p>
          </div>
        ) : null}
      </div>
      <div className="searchingHistory">
        {searchingHistory.length ? (
          searchingHistory.map((el) => (
            <HistoryListComponent name={el.name} temperature={el.main.temp} />
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            History not found
          </p>
        )}
      </div>
    </div>
  );
}
