import { useState, useContext, React } from "react";
import "./toDo.css";
import ToDoItem from "./toDoItem/ToDoItem";
import ToDoContext from "../../context/context";

export default function ToDoPage() {
  const { toDoList, addToDoItem } = useContext(ToDoContext);
  const [nameInput, setNameInput] = useState("");
  const [moreInfoInput, setMoreInfoInput] = useState("");
  const [nameFilterInput, setNameFilterInput] = useState("");
  const [moreInfoFilterInput, setMoreInfoFilterInput] = useState("");

  function settingNameInput(event) {
    setNameInput(event.target.value);
  }

  function settingMoreInfoInput(event) {
    setMoreInfoInput(event.target.value);
  }

  function settingNameFilterInput(event) {
    setNameFilterInput(event.target.value);
  }

  function settingMoreInfoFilterInput(event) {
    setMoreInfoFilterInput(event.target.value);
  }
  function filter(arr, { nameFilterInput, moreInfoFilterInput }) {
    let filteredArr = [...arr];

    if (nameFilterInput) {
      filteredArr = filteredArr.filter((el) => {
        if (el.todoName.includes(nameFilterInput)) return true;
        else return false;
      });
    }
    if (moreInfoFilterInput) {
      filteredArr = filteredArr.filter((el) => {
        if (el.moreInfo.includes(moreInfoFilterInput)) return true;
        else return false;
      });
    }
    return filteredArr;
  }

  const filteredArr = filter(toDoList, {
    nameFilterInput,
    moreInfoFilterInput,
  });

  return (
    <div className="page-wrapper">
      <h1>ToDoPage</h1>
      <div className="input-area">
        <div>
          <p>What to do</p>
          <p>{nameInput}</p>
          <input value={nameInput} onChange={settingNameInput} />
          <p>More information</p>
          <p>{moreInfoInput}</p>
          <input value={moreInfoInput} onChange={settingMoreInfoInput} />
          <button onClick={() => addToDoItem({ nameInput, moreInfoInput })}>
            Add new todo
          </button>
        </div>
        <div>
          <p>Name filter</p>
          <p>{nameFilterInput}</p>
          <input
            value={nameFilterInput}
            onChange={settingNameFilterInput}
          />

          <p>Mor info filter</p>
          <p>{moreInfoFilterInput}</p>
          <input
            value={moreInfoFilterInput}
            onChange={settingMoreInfoFilterInput}
          />
        </div>
      </div>
      <div>
        {filteredArr.length ? (
          filteredArr.map((el) => [
            <ToDoItem
              toDoName={el.todoName}
              toDoMoreInfo={el.moreInfo}
              checked={el.isDone}
              id={el.id}
              key={el.id}
            ></ToDoItem>,
          ])
        ) : (
          <p style={{textAlign: 'center', marginTop:"20px"}}>ToDos not found</p>
        )}
      </div>
    </div>
  );
}
