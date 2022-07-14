import { React } from "react";
import { useSelector } from "react-redux";

export default function Homepage() {
  const toDoList = useSelector((state) => state.toDos);
  console.log(toDoList);

  const doneToDos = toDoList.toDos.filter((el) => el.isDone).length;

  return (
    <>
      <p>All ToDos now</p>
      <div>{toDoList.toDos.length}</div>
      <p>Done ToDos</p>
      <div>{doneToDos}</div>
    </>
  );
}
