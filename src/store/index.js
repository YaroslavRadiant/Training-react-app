import { combineReducers, createStore } from "redux";
import toDosReducer from "./reducers/toDosReducer";
import cityHistoryReducer from "./reducers/cityHistoryReducer";
import storage from "redux-persist/lib/storage";

import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "counter",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cityHistoryReducer);

const rootReducer = combineReducers({
  toDos: toDosReducer,
  city: persistedReducer,
});

export const store = createStore(rootReducer);
const persistor = persistStore(store);
export { persistor };
