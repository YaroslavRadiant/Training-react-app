import { actions } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_TODO_ITEM: {
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

    case actions.REMOVE_TODO_ITEM: {
      return {
        ...state,
        toDos: state.toDos.filter((el) => el.id !== action.id),
      };
    }
    case actions.TOGGLE_COMPLETED: {
      return {
        ...state,
        toDos: state.toDos.map((el) => {
          if (el.id === action.id) {
            return { ...el, isDone: !el.isDone };
          }
          return el;
        }),
      };
    }
    case actions.ADD_NEW_CITY_WEATHER: {
      return {
        ...state,
        cityHistory: [
          ...state.cityHistory,
          {
            cityName: action.newCity.name,
            cityTemperature: action.newCity.main.temp,
          },
        ],
      };
    }
    case actions.CLEAR_CITY_WEATHER: {
      return { ...state, cityHistory: {} };
    }
    default:
      return state;
  }
};
