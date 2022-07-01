import React from "react";
import "./HistoryListComponent.css";

export default function HistoryListComponent({ name, temperature, weather }) {
  return (
    <div className="HistoryListComponent">
      <h1>{name}</h1>
      <p>{temperature}</p>
      <p>{weather}</p>
    </div>
  );
}
