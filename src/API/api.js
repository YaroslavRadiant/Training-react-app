export default async function getWeatherData(region) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${region}&appid=4a198c19172ec507deecaef0c48627d4&units=metric`
  ).then((res) => res.json());
}
