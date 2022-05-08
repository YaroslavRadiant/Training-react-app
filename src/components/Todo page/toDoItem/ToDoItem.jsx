import React from 'react';
import './toDoItem.css';
import ToDoContext from '../../../context/context';

export default function ToDoItem({
  toDoName,
  toDoMoreInfo,
  checked,
  id,
}) {
  const { deleteToDoItem, toggleToDoItem } = React.useContext(ToDoContext);
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
          onChange={() => toggleToDoItem(id)}
        ></input>
        <button className="delete-button" onClick={() => deleteToDoItem(id)}>
          Delete this todo
        </button>
      </div>
    </div>
  );
}

