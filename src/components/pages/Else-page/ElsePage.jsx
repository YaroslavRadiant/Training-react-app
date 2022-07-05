import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getSessionData } from "../../../context/sessionStorage";
import HistoryListComponent from "../Weather-page/HistoryListComponent/HistoryListComponent";

export default function ElsePage() {
  // const [posts, setPosts] = useState([]);
  const zeroValue = 0;
  const [allCity, setAllCity] = useState();

  useEffect(() => {
    setAllCity(getSessionData());
  }, []);
  console.log(typeof allCity);
  // async function fetchPosts() {
  //   const response = await axios.get(
  //     "https://jsonplaceholder.typicode.com/posts"
  //   );
  //   setPosts(response.data);
  // }
  return (
    <div>
      {allCity ? (
        <div>
          {allCity.map((el, key) => {
            return (
              <HistoryListComponent
                name={el.name}
                temperature={el.main.temp}
                weather={el.weather[0].description}
              />
              // <li>
              //   <p>{el.name}</p>
              //   <p>{el.main.temp}</p>
              // </li>
            );
          })}
          <p>
            Summa of all of them:{" "}
            {allCity.reduce((accumulator, currentValue) => {
              console.log();
              return accumulator + currentValue.main.temp;
            }, zeroValue)} 
            {/* Вынести в отдельную функцию */}
          </p>
        </div>
      ) : (
        <p>No value in sessionStorage</p>
      )}
    </div>
  );
}
