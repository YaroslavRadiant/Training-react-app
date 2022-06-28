// import React from "react";
// import { useParams } from "react-router-dom";
import getWeatherData from "../../../API/api";
import { useState, useEffect } from "react";

export default function CurrentPostPage() {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    getWeatherData(window.location.href.split("/").pop()).then((res) => {
      console.log(res);
      setCountryData(res);
    });
  }, []);

  console.log(countryData);
  return (
    <div>
      <li>{countryData.name}</li>
    </div>
  );
}
