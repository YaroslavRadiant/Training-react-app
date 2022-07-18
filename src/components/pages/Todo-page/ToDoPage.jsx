import { useState, useEffect, React } from "react";
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

  //на єтой странице должно біть 2 компонента: фильтр лист с фильтрами и таблица с пагинациями
  //если не осталось айтемов на странице перейти на прошлую страницу
  //по 10 айтемов на странице при фильтрации
  const filteredToDoList = filterToDoList(toDoList, {
    titleToDo: filter.titleToDo,
    descToDo: filter.descToDo,
  });

  const toDoListChunked = chunk(filteredToDoList, toDoPerPage);
  console.log(toDoListChunked);
  const paginatedToDoList = toDoListChunked[paginationPage];

  useEffect(() => {
    if (!paginatedToDoList) {
      paginationPage > 0 && setPaginationPage(paginationPage - 1);
    }
  }, [paginatedToDoList, paginationPage]);

  return (
    <div className="page-wrapper">
      <h1>ToDoPage</h1>
      <div className="input-area">
        <div>
          <InputContainer filter={filter} onChange={handleSetFilter} />
        </div>
      </div>
      <div>
        {paginatedToDoList?.length ? (
          paginatedToDoList.map((el) => [
            <ToDoItem
              toDoName={el.todoName}
              toDoMoreInfo={el.moreInfo}
              checked={el.isDone}
              id={el.id}
              key={el.id}
            ></ToDoItem>,
          ])
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            ToDos not found
          </p>
        )}
      </div>
      <div>
        {toDoListChunked.map((_, index) => (
          <div className="pagination-buttons-container">
            <button
              className="pagination-buttons"
              onClick={() => setPaginationPage(index)}
            >
              {index + 1}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
