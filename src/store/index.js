import { combineReducers, createStore } from "redux";
import toDosReducer from "./reducers/toDosReducer";
import cityHistoryReducer from "./reducers/cityHistoryReducer";

const rootReducer = combineReducers({
  toDos: toDosReducer,
  city: cityHistoryReducer,
});
export const store = createStore(rootReducer);
