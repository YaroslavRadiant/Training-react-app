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
  { todoName: 'Go sleep', moreInfo: 'All night', isDone: true, id: 3 },
];

// let arrForFilter = [...defaultContextState];
export const reducer = (state, action) => {
  switch (action.type) {
    case 'addToDo': {
      console.log(state);
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
    // eslint-disable-next-line no-lone-blocks
    // case 'filterName': {
    //   if (
    //     action.allFiltersInputValue.nameFilterInput === '' &&
    //     action.allFiltersInputValue.moreInfoFilterInput === ''
    //   ) {
    //     arrForFilter = [...defaultContextState];
    //     console.log(state + ' state');
    //     console.log(arrForFilter);
    //     return arrForFilter;
    //   } else {
    //     return state.filter((el) => {
    //       if (el.todoName.includes(action.filterNameInputValue)) {
    //         return true;
    //       } else {
    //         return false;
    //       }
    //     });
    //   }
    // }

    // // debugger
    // // if (action.filterNameInputValue === '') {
    // //   return state;
    // // } else if (el.todoName.includes(action.filterNameInputValue)) {
    // //   console.log(true);
    // //   return true;
    // // }
    // // return false;
    // // eslint-disable-next-line no-fallthrough
    // case 'filterByMoreInfo': {
    //   // console.log('IT WORKS');
    //   // // console.log(
    //   // state.filter((el) => {
    //   //   if (action.filterMoreInfoValue === '') {
    //   //     return state;
    //   //   } else if (el.moreInfo.includes(action.filterMoreInfoValue)) {
    //   //     return true;
    //   //   }
    //   //   return false;
    //   // });
    //   // );
    //   // break;
    // }
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
      dispatch({ type: 'addToDo', newToDo });
    },
    deleteToDoItem: (id) => {
      dispatch({ type: 'deleteToDo', id });
    },
    toggleToDoItem: (id) => {
      dispatch({ type: 'toggleToDo', id });
    },
    // searchByName: (allFiltersInputValue) => {
    //   dispatch({ type: 'filterName', allFiltersInputValue });
    // },
    // searchByMoreInfo: (filterMoreInfoValue) => {
    //   dispatch({ type: 'filterByMoreInfo', filterMoreInfoValue });
    // },
  };
  return <ToDoContext.Provider value={value}>{children}</ToDoContext.Provider>;
};

export default ToDoContext;
