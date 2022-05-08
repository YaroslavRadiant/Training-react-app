import { useContext, React } from 'react';
import ToDoContext from '../../context/context.js';

export default function Homepage() {
  const { toDoList } = useContext(ToDoContext);

  const doneToDos = toDoList.filter((el) => el.isDone).length;

  return (
    <>
      <p>All ToDos now</p>
      <div>{toDoList.length}</div>
      <p>Done ToDos</p>
      <div>{doneToDos}</div>
    </>
  );
}
