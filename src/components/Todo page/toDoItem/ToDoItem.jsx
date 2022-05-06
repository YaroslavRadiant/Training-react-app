import React from 'react';
import './toDoItem.css';

export default function ToDoItem({
  toDoName,
  toDoMoreInfo,
  deleteHandler,
  checked, 
  handleChange,
  id
}) {
  return (
    <div>
      <div className="item-wrapper">
        <div className={checked ? 'text-container checked' : 'text-container'}>
          <p>{toDoName}</p>
          <p>{toDoMoreInfo}</p>
        </div>
        <input
          type="checkbox"
          checked={checked}
          onChange={()=>handleChange(id)}
        ></input>
        <button
          className="delete-button"
          onClick={() => deleteHandler(toDoName)}
        >
          Delete this todo
        </button>
      </div>
    </div>
  );
}
