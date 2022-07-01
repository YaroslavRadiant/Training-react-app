import React from "react";
import { actions } from "../reducers/actions";
import { reducer } from "../reducers/reducer";
import { defaultContextState } from "../reducers/state";

const ToDoContext = React.createContext();

export const ToDoProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, defaultContextState);
  const value = {
    toDoList: state[0],
    addToDoItem: (newToDo) => {
      dispatch({ type: actions.ADD_TODO_ITEM, newToDo });
    },
    deleteToDoItem: (id) => {
      dispatch({ type: actions.REMOVE_TODO_ITEM, id });
    },
    toggleToDoItem: (id) => {
      dispatch({ type: actions.TOGGLE_COMPLETED, id });
    },
    addNewCityWeather: (newCity) => {
      console.log(newCity);
      dispatch({ type: actions.ADD_NEW_CITY_WEATHER, newCity });
    },
    clearCityWeather: () => {
      dispatch({ type: actions.CLEAR_CITY_WEATHER });
    },
  };
  return <ToDoContext.Provider value={value}>{children}</ToDoContext.Provider>;
};

export default ToDoContext;
