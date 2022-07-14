import { useState, React } from "react";
import "./toDo.css";
import ToDoItem from "./toDoItem/ToDoItem";
import InputContainer from "./inputContainer/InputContainer";
import { useSelector } from "react-redux";
import chunk from "lodash/chunk";

export default function ToDoPage() {
  const [filter, setFilter] = useState({ titleToDo: "", descToDo: "" });

  const [paginationPage, setPaginationPage] = useState(0);
  const toDoList = useSelector((state) => state.toDos.toDos);
  const [toDoPerPage, setToDoPerPage] = useState(10);
  const toDoListChunked = chunk(toDoList, toDoPerPage);

  console.log(toDoListChunked);
  const renderPaginationButtons = () => {
    return toDoListChunked.map((_, index) => {
      return (
        <div className="pagination-buttons-container">
          <button
            className="pagination-buttons"
            onClick={() => setPaginationPage(index)}
          >
            {index + 1}
          </button>
        </div>
      );
    });
  };

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
    const filteredToDoList = filterToDoList(toDoListChunked[paginationPage], {
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
      <div>{renderPaginationButtons()}</div>
    </div>
  );
}
