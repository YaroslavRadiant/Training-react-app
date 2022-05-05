import React from 'react';
import ToDoItem from './toDoItem/ToDoItem';

export default function ToDoSection({ arr, deleteHandler }) {
  return (
    <div>
      <div>
        {arr.map((el) => [
          <ToDoItem
            toDoName={el.todoName}
            toDoMoreInfo={el.moreInfo}
            deleteHandler={deleteHandler}
          ></ToDoItem>,
        ])}
      </div>
    </div>
  );
}
