import React from 'react';
import './toDoItem.css';

export default function ToDoItem({ toDoName, toDoMoreInfo, deleteHandler}) {
  return (
    <div>
      <div className="item-wrapper">
        <div className="text-container">
          <p>{toDoName}</p>
          <p>{toDoMoreInfo}</p>
        </div>
        <button className="delete-button" onClick={()=>deleteHandler(toDoName)}>Delete this todo</button>
      </div>
    </div>
  );
}
