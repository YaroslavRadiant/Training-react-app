import { combineReducers, createStore } from "redux";
import toDosReducer from "./reducers/toDosReducer";

const rootReducer = combineReducers({ toDos: toDosReducer, countries: countriesReducer });
export const store = createStore(rootReducer);