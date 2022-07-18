import { createSelector } from "reselect";

export const getAllCitySelector = (state) => state.city.cityHistory;

export const getSumOfCity = createSelector(getAllCitySelector, (cities) => {
  if (cities) {
    cities.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.action.payload.main.temp;
    }, 0);
  } else return 10;
});
// // Reselect reduce
