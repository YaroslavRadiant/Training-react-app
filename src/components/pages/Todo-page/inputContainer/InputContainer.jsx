import React, { useState, useEffect, useContext } from "react";
import Input from "../../../input/Input";
import ToDoContext from "../../../../context/context";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../../../../store/actions/toDoActions";

export default function InputContainer({ filter, onChange }) {
  const dispatch = useDispatch();
  const [titleToDo, setTitleToDo] = useState("");
  const [descToDo, setDescToDo] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [moreInfoInput, setMoreInfoInput] = useState("");
  // const { toDoList, addToDoItem } = useContext(ToDoContext);

  // useEffect(() => {
  //   filteredArr();
  // }, [titleToDo, descToDo, toDoList]);

  // const toDoList = useSelector((state) => state.toDos);

  function settingNameInput(event) {
    setNameInput(event.target.value);
  }

  function settingMoreInfoInput(event) {
    setMoreInfoInput(event.target.value);
  }

  function settingNameFilterInput(event) {
    setTitleToDo(event.target.value);
  }

  function settingMoreInfoFilterInput(event) {
    setDescToDo(event.target.value);
  }

  function handleAddToDoItem() {
    dispatch(addToDo({ nameInput, moreInfoInput }));
  }

  return (
    <>
      <div>
        <Input
          name={"What to do"}
          value={nameInput}
          onChange={settingNameInput}
        />
        <Input
          name={"More information"}
          value={moreInfoInput}
          onChange={settingMoreInfoInput}
        />
        <button onClick={handleAddToDoItem}>Add new todo</button>
      </div>
      <Input
        name={"Name filter"}
        value={filter.titleToDo}
        onChange={onChange("titleToDo")}
      />
      <Input
        name={"More info"}
        value={filter.descToDo}
        onChange={onChange("descToDo")}
      />
    </>
  );
}
