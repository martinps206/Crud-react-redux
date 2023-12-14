import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Reducer } from "./Reducer";

const rootReducer = combineReducers({ user: Reducer });

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
});

export default store;
