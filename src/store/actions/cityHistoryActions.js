export const ADD_CITY = "ADD_CITY";
export const ZEROING_CITY = "ZEROING_CITY";

export const addCity = (payload) => {
  return { type: ADD_CITY, payload };
};
export const zeroingCity = () => {
  return { type: ZEROING_CITY };
};
