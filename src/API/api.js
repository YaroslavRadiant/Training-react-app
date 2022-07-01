export default function getWeatherData(region) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e68afb035fmsh0632c2e1eb66155p104875jsn8ea9af63ccb1",
      "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
    },
  };

  return fetch(
    `https://community-open-weather-map.p.rapidapi.com/weather?q=${region}&lat=0&lon=0&id=2172797&lang=ru&units=metric`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
}
