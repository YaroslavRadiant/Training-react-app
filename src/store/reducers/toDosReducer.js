import {
  ADD_TODO_ITEM,
  REMOVE_TODO_ITEM,
  TOGGLE_COMPLETED,
} from "../actions/toDoActions";

const initialState = {
  toDos: [
    {
      todoName: "Read a book",
      moreInfo: "50 pages every day",
      isDone: true,
      id: 1,
    },
    { todoName: "Bye food", moreInfo: "Eggs and milk", isDone: true, id: 2 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 3 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 4 },
  ],
};

const toDosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ITEM: {
      return {
        ...state,
        toDos: [
          ...state.toDos,
          {
            todoName: action.payload.nameInput,
            moreInfo: action.payload.moreInfoInput,
            isDone: false,
            id: new Date().valueOf(),
          },
        ],
      };
    }

    case REMOVE_TODO_ITEM: {
      return {
        ...state,
        toDos: state.toDos.filter((el) => el.id !== action.payload),
      };
    }
    case TOGGLE_COMPLETED: {
      console.log(action);
      return {
        ...state,
        toDos: state.toDos.map((el) => {
          if (el.id === action.payload) {
            return { ...el, isDone: !el.isDone };
          }
          return el;
        }),
      };
    }
    default:
      return state;
  }
};

export default toDosReducer;
