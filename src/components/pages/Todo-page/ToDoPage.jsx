import { useState, React } from "react";
import "./toDo.css";
import ToDoItem from "./toDoItem/ToDoItem";
import InputContainer from "./inputContainer/InputContainer";

export default function ToDoPage() {
  const [toDoListFiltered, setToDoListFiltered] = useState([]);

  const ToDoListChildren = () => {
    return toDoListFiltered.length ? (
      toDoListFiltered.map((el) => [
        <ToDoItem
          toDoName={el.todoName}
          toDoMoreInfo={el.moreInfo}
          checked={el.isDone}
          id={el.id}
          key={el.id}
        ></ToDoItem>,
      ])
    ) : (
      <p style={{ textAlign: "center", marginTop: "20px" }}>ToDos not found</p>
    );
  };
  
  return (
    <div className="page-wrapper">
      <h1>ToDoPage</h1>
      <div className="input-area">
        <div>
          <InputContainer handleFilter={setToDoListFiltered} />
        </div>
      </div>
      <div>{ToDoListChildren()}</div>
    </div>
  );
}
