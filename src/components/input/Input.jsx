import React from "react";

export default function Input({ name, value, onChange }) {
  return (
    <div>
      <p>{name}</p>
      <p>{value}</p>
      <input value={value} onChange={onChange} />
    </div>
  );
}
