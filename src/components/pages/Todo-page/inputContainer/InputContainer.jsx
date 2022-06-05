import React, { useState, useEffect, useContext } from 'react';
import Input from './input/Input';
import ToDoContext from '../../../../context/context';

export default function InputContainer({ handleFilter }) {
  const [titleToDo, setTitleToDo] = useState('');
  const [descToDo, setDescToDo] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [moreInfoInput, setMoreInfoInput] = useState('');
  const { toDoList, addToDoItem } = useContext(ToDoContext);

  useEffect(() => {
    filteredArr();
  }, [titleToDo, descToDo, toDoList]);

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

  function filter(arr, { titleToDo, descToDo }) {
    let filteredArr = [...arr];

    if (titleToDo) {
      filteredArr = filteredArr.filter((el) => el.todoName.includes(titleToDo));
    }
    if (descToDo) {
      filteredArr = filteredArr.filter((el) => el.moreInfo.includes(descToDo));
    }
    return filteredArr;
  }

  function handleAddToDoItem() {
    console.log('done');
    addToDoItem({ nameInput, moreInfoInput });
  }
  const filteredArr = () => {
    const filtered = filter(toDoList, {
      titleToDo,
      descToDo,
    });
    handleFilter(filtered);
  };

  return (
    <>
      <div>
        <Input
          name={'What to do'}
          value={nameInput}
          onChange={settingNameInput}
        />
        <Input
          name={'More information'}
          value={moreInfoInput}
          onChange={settingMoreInfoInput}
        />
        <button onClick={handleAddToDoItem}>Add new todo</button>
      </div>
      <Input
        name={'Name filter'}
        value={titleToDo}
        onChange={settingNameFilterInput}
      />
      <Input
        name={'More info'}
        value={descToDo}
        onChange={settingMoreInfoFilterInput}
      />
    </>
  );
}
