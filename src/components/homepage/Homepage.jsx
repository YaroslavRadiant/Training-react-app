import { useContext, React } from 'react';
import ToDoItem from '../Todo page/toDoItem/ToDoItem';
import context from '../../context/context.js';

export default function Homepage() {
  let todoContext = useContext(context);
  console.log(todoContext);
  // console.log(context)

  return (
    <>
      <p>All ToDos now</p>
      <div>{}</div>
      <p>Done ToDos</p>
      <div></div>
    </>
  );
}
