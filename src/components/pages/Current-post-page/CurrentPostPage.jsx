import getWeatherData from "../../../API/api";
import { useState, useEffect } from "react";
import HistoryListComponent from "../Weather-page/HistoryListComponent/HistoryListComponent";
import { addCity } from "../../../store/actions/cityHistoryActions";
import { useDispatch } from "react-redux";

export default function CurrentPostPage() {
  const [countryData, setCountryData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    getWeatherData(window.location.href.split("/").pop()).then((response) => {
      setCountryData(response);
    });
  }, []);

  return (
    <div>
      {countryData ? (
        <div>
          <HistoryListComponent
            name={countryData.name}
            temperature={countryData.main.temp}
            weather={countryData.weather[0].description}
          />
          <button onClick={() => dispatch(addCity(countryData))}>
            Add to store
          </button>
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}
