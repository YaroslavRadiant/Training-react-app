import React from "react";
import "./toDoItem.css";
// import ToDoContext from "../../../../context/context";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsCompleted,
  removeToDo,
} from "../../../../store/actions/toDoActions";

export default function ToDoItem({ toDoName, toDoMoreInfo, checked, id }) {
  const dispatch = useDispatch();
  // const toDoList = useSelector((state) => state.toDos);

  return (
    <div>
      <div className="item-wrapper">
        <div className={checked ? "text-container checked" : "text-container"}>
          <p>{toDoName}</p>
          <p>{toDoMoreInfo}</p>
        </div>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => dispatch(setIsCompleted(id))}
        ></input>
        <button
          className="delete-button"
          onClick={() => dispatch(removeToDo(id))}
        >
          Delete this todo
        </button>
      </div>
    </div>
  );
}
