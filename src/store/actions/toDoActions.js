export const ADD_TODO_ITEM = "ADD_TODO_ITEM";
export const REMOVE_TODO_ITEM = "REMOVE_TODO_ITEM";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";

export const addToDo = (payload) => {
  return { type: ADD_TODO_ITEM, payload };
};

export const removeToDo = (payload) => {
  return { type: REMOVE_TODO_ITEM, payload };
};

export const setIsCompleted = (payload) => {
  return { type: TOGGLE_COMPLETED, payload };
};
