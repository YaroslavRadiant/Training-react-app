import React from 'react';

const defaultContextState = [
  {
    todoName: 'Read a book',
    moreInfo: '50 pages every day',
    isDone: false,
    id: 1,
  },
  { todoName: 'Bye food', moreInfo: 'Eggs and milk', isDone: false, id: 2 },
  { todoName: 'Go sleep', moreInfo: 'All night', isDone: true, id: 3 },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case 'addToDo': {
      return [
        ...state,
        {
          todoName: action.newToDo.nameInput,
          moreInfo: action.newToDo.moreInfoInput,
          isDone: false,
          id: new Date().valueOf(),
        },
      ];
    }
    case 'deleteToDo': {
      return state.filter((el) => el.id !== action.id);
    }
    case 'toggleToDo': {
      return state.map((el) => {
        if (el.id === action.id) {
          return { ...el, isDone: !el.isDone };
        }
        return el;
      });
    }
    default:
      return state;
  }
};

const ToDoContext = React.createContext();

export const ToDoProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, defaultContextState);
  const value = {
    toDoList: state,
    addToDoItem: (newToDo) => {
      dispatch({ type: 'addToDo', newToDo });
    },
    deleteToDoItem: (id) => {
      dispatch({ type: 'deleteToDo', id });
    },
    toggleToDoItem: (id) => {
      dispatch({ type: 'toggleToDo', id });
    },
  };
  return <ToDoContext.Provider value={value}>{children}</ToDoContext.Provider>;
};

export default ToDoContext;
