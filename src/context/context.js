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

const toDoContext = React.createContext(defaultContextState);

export const toDoProvider = toDoContext.Provider;

export default toDoContext;
