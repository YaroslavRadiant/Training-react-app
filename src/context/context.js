import React from "react";

const defaultContextState = [
  {
    todoName: "Read a book",
    moreInfo: "50 pages every day",
    isDone: false,
    id: 1,
  },
  { todoName: "Bye food", moreInfo: "Eggs and milk", isDone: false, id: 2 },
  { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 3 },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "addToDo": {
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
    case "deleteToDo": {
      return state.filter((el) => el.id !== action.id);
    }
    case "toggleToDo": {
      return state.map((el) => {
        if (el.id === action.id) {
          return { ...el, isDone: !el.isDone };
        }
        return el;
      });
    }
    case "filterName": {
      // if (action.filterNameInputValue.length === 0) {
      //   console.log(state);
      //   return state;
      // }
      // return state.filter((el) => {
      //   let newRG = new RegExp(action.filterNameInputValue, "i");
      //   if (newRG.test(el.todoName)) {
      //     return true;
      //   } else return false;
      // });
      console.log(
        state.filter((el) => {
          // debugger
          if (action.filterNameInputValue === "") {
            return state;
          } else if (el.todoName.includes(action.filterNameInputValue)) {
            return true;
          }
          return false;
        })
      );
      // break;
    }
    // eslint-disable-next-line no-fallthrough
    case "filterByMoreInfo": {
      // if (action.filterMoreInfoValue.length === 0) {
      //   console.log(state);
      //   return state;
      // }
      // return state.filter((el) => {
      //   let newRG = new RegExp(action.filterMoreInfoValue, "i");
      //   if (newRG.test(el.moreInfo)) {
      //     return true;
      //   } else return false;
      // });
      console.log("IT WORKS");
      console.log(
        state.filter((el) => {
          if (action.filterMoreInfoValue === "") {
            return state;
          } else if (el.moreInfo.includes(action.filterMoreInfoValue)) {
            return true;
          }
          return false;
        })
      );
      // break;
    }
    // eslint-disable-next-line no-fallthrough
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
      dispatch({ type: "addToDo", newToDo });
    },
    deleteToDoItem: (id) => {
      dispatch({ type: "deleteToDo", id });
    },
    toggleToDoItem: (id) => {
      dispatch({ type: "toggleToDo", id });
    },
    searchByName: (filterNameInputValue) => {
      dispatch({ type: "filterName", filterNameInputValue });
    },
    searchByMoreInfo: (filterMoreInfoValue) => {
      dispatch({ type: "filterByMoreInfo", filterMoreInfoValue });
    },
  };
  return <ToDoContext.Provider value={value}>{children}</ToDoContext.Provider>;
};

export default ToDoContext;
