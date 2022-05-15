import { actions } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_TODO_ITEM: {
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
    case actions.REMOVE_TODO_ITEM: {
      return state.filter((el) => el.id !== action.id);
    }
    case actions.TOGGLE_COMPLETED: {
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
