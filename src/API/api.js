export default async function getWeatherData(region) {
  return fetch(
    // `https://api.openweathermap.org/data/2.5/weather?q=${region}&appid=4a198c19172ec507deecaef0c48627d4&units=metric`
    `https://api.openweathermap.org/data/2.5/weather?q=${region}&appid=91f24f2431b7c2d6bc85cf5e4715a910&units=metric`
  ).then((res) => {
    console.log(res);
    res.json();
  });
}
