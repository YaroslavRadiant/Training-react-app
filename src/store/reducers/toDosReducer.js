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
      id: 1231232132000000000000000,
    },
    {
      todoName: "Bye food",
      moreInfo: "Eggs and milk",
      isDone: true,
      id: 123123213200000000000,
    },
    {
      todoName: "Go sleep",
      moreInfo: "All night",
      isDone: true,
      id: 213412343,
    },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 23412344 },
    {
      todoName: "Read a book",
      moreInfo: "50 pages every day",
      isDone: true,
      id: 1,
    },
    {
      todoName: "Bye food",
      moreInfo: "Eggs and milk",
      isDone: true,
      id: 4434212,
    },
    {
      todoName: "Go sleep",
      moreInfo: "All night",
      isDone: true,
      id: 213443243,
    },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 4324234 },
    {
      todoName: "Read a book",
      moreInfo: "50 pages every day",
      isDone: true,
      id: 1,
    },
    {
      todoName: "Bye food",
      moreInfo: "Eggs and milk",
      isDone: true,
      id: 42134232,
    },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 21343 },
    {
      todoName: "Go sleep",
      moreInfo: "All night",
      isDone: true,
      id: 4321341412344,
    },
    {
      todoName: "Read a book",
      moreInfo: "50 pages every day",
      isDone: true,
      id: 1,
    },
    {
      todoName: "Bye food",
      moreInfo: "Eggs and milk",
      isDone: true,
      id: 52353512352,
    },
    {
      todoName: "Go sleep",
      moreInfo: "All night",
      isDone: true,
      id: 325235353,
    },
    {
      todoName: "Go sleep",
      moreInfo: "All night",
      isDone: true,
      id: 553532515314,
    },
    {
      todoName: "Read a book",
      moreInfo: "50 pages every day",
      isDone: true,
      id: 1,
    },
    {
      todoName: "Bye food",
      moreInfo: "Eggs and milk",
      isDone: true,
      id: 553532522352,
    },
    {
      todoName: "Go sleep",
      moreInfo: "All night",
      isDone: true,
      id: 52235533255323,
    },
    {
      todoName: "Go sleep",
      moreInfo: "All night",
      isDone: true,
      id: 5325232354,
    },
    {
      todoName: "Read a book",
      moreInfo: "50 pages every day",
      isDone: true,
      id: 1,
    },
    { todoName: "Bye food", moreInfo: "Eggs and milk", isDone: true, id: 2 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 3 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 4 },
    {
      todoName: "Read a book",
      moreInfo: "50 pages every day",
      isDone: true,
      id: 1,
    },
    { todoName: "Bye food", moreInfo: "Eggs and milk", isDone: true, id: 2 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 3 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 4 },
    {
      todoName: "Read a book",
      moreInfo: "50 pages every day",
      isDone: true,
      id: 1,
    },
    { todoName: "Bye food", moreInfo: "Eggs and milk", isDone: true, id: 2 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 3 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 4 },
    {
      todoName: "Read a book",
      moreInfo: "50 pages every day",
      isDone: true,
      id: 1,
    },
    { todoName: "Bye food", moreInfo: "Eggs and milk", isDone: true, id: 2 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 3 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 4 },

    {
      todoName: "Read a book",
      moreInfo: "50 pages every day",
      isDone: true,
      id: 1,
    },
    { todoName: "Bye food", moreInfo: "Eggs and milk", isDone: true, id: 2 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 3 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 4 },
    {
      todoName: "Read a book",
      moreInfo: "50 pages every day",
      isDone: true,
      id: 1,
    },
    { todoName: "Bye food", moreInfo: "Eggs and milk", isDone: true, id: 2 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 3 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 4 },
    {
      todoName: "Read a book",
      moreInfo: "50 pages every day",
      isDone: true,
      id: 1,
    },
    { todoName: "Bye food", moreInfo: "Eggs and milk", isDone: true, id: 2 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 3 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 4 },
    {
      todoName: "Read a book",
      moreInfo: "50 pages every day",
      isDone: true,
      id: 1,
    },
    { todoName: "Bye food", moreInfo: "Eggs and milk", isDone: true, id: 2 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 3 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 4 },
    {
      todoName: "Read a book",
      moreInfo: "50 pages every day",
      isDone: true,
      id: 1,
    },
    { todoName: "Bye food", moreInfo: "Eggs and milk", isDone: true, id: 2 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 3 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 4 },
    {
      todoName: "Read a book",
      moreInfo: "50 pages every day",
      isDone: true,
      id: 1,
    },
    { todoName: "Bye food", moreInfo: "Eggs and milk", isDone: true, id: 2 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 3 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 4 },
    {
      todoName: "Read a book",
      moreInfo: "50 pages every day",
      isDone: true,
      id: 1,
    },
    { todoName: "Bye food", moreInfo: "Eggs and milk", isDone: true, id: 2 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 3 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 4 },
    {
      todoName: "Read a book",
      moreInfo: "50 pages every day",
      isDone: true,
      id: 1,
    },
    { todoName: "Bye food", moreInfo: "Eggs and milk", isDone: true, id: 2 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 3 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 4 },
    {
      todoName: "Read a book",
      moreInfo: "50 pages every day",
      isDone: true,
      id: 1,
    },
    { todoName: "Bye food", moreInfo: "Eggs and milk", isDone: true, id: 2 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 3 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 4 },
    {
      todoName: "Read a book",
      moreInfo: "50 pages every day",
      isDone: true,
      id: 1,
    },
    { todoName: "Bye food", moreInfo: "Eggs and milk", isDone: true, id: 2 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 3 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 4 },
    {
      todoName: "Read a book",
      moreInfo: "50 pages every day",
      isDone: true,
      id: 1,
    },
    { todoName: "Bye food", moreInfo: "Eggs and milk", isDone: true, id: 2 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 3 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 4 },
    {
      todoName: "Read a book",
      moreInfo: "50 pages every day",
      isDone: true,
      id: 1,
    },
    { todoName: "Bye food", moreInfo: "Eggs and milk", isDone: true, id: 2 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 3 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 4 },
    {
      todoName: "Read a book",
      moreInfo: "50 pages every day",
      isDone: true,
      id: 1,
    },
    { todoName: "Bye food", moreInfo: "Eggs and milk", isDone: true, id: 2 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 3 },
    { todoName: "Go sleep", moreInfo: "All night", isDone: true, id: 4 },
    {
      todoName: "Read a book",
      moreInfo: "50 pages every day",
      isDone: true,
      id: 1,
    },
    {
      todoName: "Bye food",
      moreInfo: "Eggs and milk",
      isDone: true,
      id: 90909090909090909909090099090,
    },
    {
      todoName: "Go sleep",
      moreInfo: "All night",
      isDone: true,
      id: 90909099999900000,
    },
    {
      todoName: "Go sleep",
      moreInfo: "All night",
      isDone: true,
      id: 909090909090,
    },
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
        //find index, splice
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
