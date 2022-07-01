import { actions } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_TODO_ITEM: {
      return [
        [
          ...state[0],
          {
            todoName: action.newToDo.nameInput,
            moreInfo: action.newToDo.moreInfoInput,
            isDone: false,
            id: new Date().valueOf(),
          },
        ],
        [...state[1]],
      ];
    }
    case actions.REMOVE_TODO_ITEM: {
      return [[...state[0].filter((el) => el.id !== action.id)], [...state[1]]];
    }
    case actions.TOGGLE_COMPLETED: {
      return [
        [
          ...state[0].map((el) => {
            if (el.id === action.id) {
              return { ...el, isDone: !el.isDone };
            }
            return el;
          }),
        ],
        [...state[1]],
      ];
    }
    case actions.ADD_NEW_CITY_WEATHER: {
      return [
        [...state[0]],
        [
          ...state[1],
          {
            cityName: action.newCity.name,
            cityTemperature: action.newCity.main.temp,
          },
        ],
      ];
    }
    case actions.CLEAR_CITY_WEATHER: {
      return [[...state[0]], []];
    }
    default:
      return state;
  }
};
