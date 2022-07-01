import getWeatherData from "../../../API/api";
import { useState, useEffect, useContext } from "react";
import HistoryListComponent from "../Weather-page/HistoryListComponent/HistoryListComponent";
import ToDoContext from "../../../context/context";

export default function CurrentPostPage() {
  // const [newCity, setNewCity] = useState();
  const [countryData, setCountryData] = useState();
  // const { addNewCityWeather } = useContext(ToDoContext);

  useEffect(() => {
    getWeatherData(window.location.href.split("/").pop()).then((response) => {
      setCountryData(response);
    });
  }, []);

  function handleAddNewCity() {
    // setCountryData({ Name: "Roma", age: 10 });
    // addNewCityWeather(countryData);
    // console.log("done");
    // let sessionStorageStore = sessionStorage.setItem("sessionStorageStore", JSON.stringify(obg));
    let sessionStorageStoreData = sessionStorage.getItem("sessionStorageStore");

    if (sessionStorageStoreData !== null) {
      console.log("существует");
      console.log(sessionStorageStoreData);
      console.log(typeof sessionStorageStoreData);
      let qqqq = JSON.parse(sessionStorageStoreData);
      console.log(qqqq);
      // let newObj = eval(sessionStorageStoreData);
      // console.log(newObj);
      let obj = [...qqqq, countryData];
      sessionStorage.removeItem("sessionStorageStore");
      console.log("удален и создан заново");
      sessionStorage.setItem("sessionStorageStore", JSON.stringify(obj));
      console.log(sessionStorage.getItem("sessionStorageStore"));
      console.log(countryData);
    } else if (sessionStorageStoreData === null) {
      console.log("не существует");
      let qwe = JSON.stringify([countryData]);
      sessionStorage.setItem("sessionStorageStore", qwe);
      console.log("создан новый");
    }
  }

  return (
    <div>
      {countryData ? (
        <div>
          <HistoryListComponent
            name={countryData.name}
            temperature={countryData.main.temp}
            weather={countryData.weather[0].description}
          />
          <button onClick={handleAddNewCity}>Add to store</button>
        </div>
      ) : (
        <span>Loading...</span>
      )}
      {/* <button onClick={handleAddNewCity}>Add to store</button> */}
    </div>
  );
}

// value({
//   coord: { lon: 28.481, lat: 49.2328 },
//   weather: [{ id: 800, main: "Clear", description: "ясно", icon: "01d" }],
//   base: "stations",
//   main: {
//     temp: 27.08,
//     feelslike: 27.56,
//     tempmin: 27.08,
//     tempmax: 27.08,
//     pressure: 1016,
//     humidity: 51,
//     sealevel: 1016,
//     grnd_level: 988,
//   },
//   visibility: 10000,
//   wind: { speed: 2.98, deg: 66, gust: 3.03 },
//   clouds: { all: 4 },
//   dt: 1656577435,
//   sys: { country: "UA", sunrise: 1656554641, sunset: 1656612905 },
//   timezone: 10800,
//   id: 689558,
//   name: "Винница",
//   cod: 200,
// });

// if (!sessionStorageStoreData) {
//   let qwe = JSON.stringify({ ...countryData });
//   sessionStorage.setItem("sessionStorageStore", qwe);
//   console.log("Отправили " + qwe);
//   // let sessionStorageCurrentData = sessionStorage.getItem(
//   //   "sessionStorageStore"
//   // );
//   // console.log("Получили " + sessionStorageCurrentData);
// } else {
//   let sessionStorageCurrentData = sessionStorage.getItem(
//     "sessionStorageStore"
//   );
//   let qqq = JSON.parse(sessionStorageCurrentData);
//   console.log(sessionStorageCurrentData);
//   let obj = { ...sessionStorageCurrentData, countryData };
//   // console.log("Получили " + sessionStorageCurrentData);
//   sessionStorage.removeItem("sessionStorageStore");
//   sessionStorage.setItem("sessionStorageStore", JSON.stringify({ ...obj }));
// }
