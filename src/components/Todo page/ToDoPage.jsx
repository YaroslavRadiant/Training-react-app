import { useState, createContext, useContext, React } from 'react';
import './toDo.css';
// import ToDoSection from './toDoSection/ToDoSection';
import ToDoItem from './toDoItem/ToDoItem';
import toDoContext from '../../context/context';

export default function ToDoPage() {
  // const context = useContext(toDoContext);
  //use reduser use context
  const [toDoMass, setToDoMass] = useState([
    {
      todoName: 'Read a book',
      moreInfo: '50 pages every day',
      isDone: false,
      id: 1,
    },
    { todoName: 'Bye food', moreInfo: 'Eggs and milk', isDone: false, id: 2 },
    { todoName: 'Go sleep', moreInfo: 'All night', isDone: true, id: 3 },
  ]);

  const [nameInput, setNameInput] = useState('');
  const [moreInfoInput, setMoreInfoInput] = useState('');

  const handleChange = (id) => {
    setToDoMass(
      toDoMass.map((el) => {
        if (el.id === id) {
          return { ...el, isDone: !el.isDone };
        } else return el;
      })
    );
  };

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
      {
        todoName: nameInput,
        moreInfo: moreInfoInput,
        isDone: false,
        id: Date.now,
      },
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
        <div>
          {toDoMass.map((el) => [
            <ToDoItem
              // contextToDoMass={contextToDoMass}
              toDoName={el.todoName}
              toDoMoreInfo={el.moreInfo}
              checked={el.isDone}
              deleteHandler={deleteToDo}
              handleChange={handleChange}
              id={el.id}
              key={el.id}
            ></ToDoItem>,
          ])}
        </div>
      </div>
    </div>
  );
}
