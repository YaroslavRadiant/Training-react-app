import { combineReducers, createStore } from "redux";
import toDosReducer from "./reducers/toDosReducer";

const rootReducer = combineReducers({ toDos: toDosReducer });
export const store = createStore(rootReducer);
