import { useState, React } from "react";
import "./toDo.css";
import ToDoItem from "./toDoItem/ToDoItem";
import InputContainer from "./inputContainer/InputContainer";
import { useDispatch, useSelector } from "react-redux";

export default function ToDoPage() {
  // const [toDoListFiltered, setToDoListFiltered] = useState([]);
  const [filter, setFilter] = useState({ titleToDo: "", descToDo: "" });

  const toDoList = useSelector((state) => state.toDos);

  const handleSetFilter = (name) => (e) => {
    setFilter({ ...filter, [name]: e.target.value });
  };

  function filterToDoList(arr, { titleToDo, descToDo }) {
    let filteredArr = [...arr];

    if (titleToDo) {
      filteredArr = filteredArr.filter((el) => el.todoName.includes(titleToDo));
    }
    if (descToDo) {
      filteredArr = filteredArr.filter((el) => el.moreInfo.includes(descToDo));
    }
    return filteredArr;
  }

  const ToDoListChildren = () => {
    // filter(toDoList.toDos);
    const filteredToDoList = filterToDoList(toDoList.toDos, {
      titleToDo: filter.titleToDo,
      descToDo: filter.descToDo,
    });
    return filteredToDoList.length ? (
      filteredToDoList.map((el) => [
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
          <InputContainer filter={filter} onChange={handleSetFilter} />
        </div>
      </div>
      <div>{ToDoListChildren()}</div>
    </div>
  );
}
