import { ADD_CITY, ZEROING_CITY } from "../actions/cityHistoryActions";

const initialState = {
  cityHistory: [],
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CITY: {
      return {
        ...state,
        cityHistory: [
          ...state.cityHistory,
          {
            action
          },
        ],
      };
    }

    case ZEROING_CITY: {
      return {
        ...state,
        cityHistory: [],
      };
    }
    default:
      return state;
  }
};

export default countriesReducer;
