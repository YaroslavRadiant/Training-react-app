import React from "react";
import HistoryListComponent from "../Weather-page/HistoryListComponent/HistoryListComponent";
import { useDispatch, useSelector } from "react-redux";
import { zeroingCity } from "../../../store/actions/cityHistoryActions";
import {
  getAllCitySelector,
  getSumOfCity,
} from "../../../store/reducers/selectors";

export default function ElsePage() {
  const zeroValue = 0;
  const dispatch = useDispatch();
  const countryList = useSelector((state) => state);

  return (
    <div>
      {getAllCitySelector(countryList) ? (
        <div>
          {getAllCitySelector(countryList).map((el, key) => {
            return (
              <HistoryListComponent
                name={el.action.payload.name}
                temperature={el.action.payload.main.temp}
                weather={el.action.payload.weather[0].description}
              />
            );
          })}
          <p>
            Summa of all of them:{" "}
            {/* {getAllCitySelector(countryList).reduce(
              (accumulator, currentValue) => {
                return accumulator + currentValue.action.payload.main.temp;
              },
              zeroValue
            )} */}
            {getSumOfCity(countryList)}
            {/* Вынести в отдельную функцию */}
          </p>
        </div>
      ) : (
        <p>No value in sessionStorage</p>
      )}
      <button onClick={() => dispatch(zeroingCity())}>
        Clear all country state
      </button>
    </div>
  );
}
