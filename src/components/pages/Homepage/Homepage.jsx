import { useContext, React } from "react";
import ToDoContext from "../../../context/context.js";
import { useDispatch, useSelector } from "react-redux";
// import { addToDo } from "../../../../store/actions/toDoActions";

export default function Homepage() {
  const toDoList = useSelector((state) => state.toDos);
  // const { toDoList } = useContext(ToDoContext);

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
