import { useState, React } from 'react';
import './toDo.css';
import ToDoSection from './toDoSection/ToDoSection';

export default function ToDoPage() {
  //use reduser use context
  const [toDoMass, setToDoMass] = useState([
    { todoName: 'Read a book', moreInfo: '50 pages every day' },
    { todoName: 'Bye food', moreInfo: 'Eggs and milk' },
    { todoName: 'Go sleep', moreInfo: 'All night' },
  ]);
  const [nameInput, setNameInput] = useState('');
  const [moreInfoInput, setMoreInfoInput] = useState('');

  function settingNameInput(event) {
    setNameInput(event.target.value);
  }

  function settingMoreInfoInput(event) {
    setMoreInfoInput(event.target.value);
  }

  function deleteToDo(todoName) {
    const newToDoMass = toDoMass.filter((todo) => {
      return todo.todoName !== todoName;
    });
    setToDoMass(newToDoMass);
  }

  function addNewToDo() {
    setToDoMass([
      ...toDoMass,
      { todoName: nameInput, moreInfo: moreInfoInput },
    ]);
  }
  return (
    <div className="page-wrapper">
      <h1>ToDoPage</h1>
      <div className="input-area">
        <p>What to do</p>
        <p>{nameInput}</p>
        <input value={nameInput} onChange={settingNameInput} />
        <p>More information</p>
        <p>{moreInfoInput}</p>
        <input value={moreInfoInput} onChange={settingMoreInfoInput} />
        <button onClick={addNewToDo}>Add new todo</button>
        <ToDoSection arr={toDoMass} deleteHandler={deleteToDo} />
      </div>
    </div>
  );
}
