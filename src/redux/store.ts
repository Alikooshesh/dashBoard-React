import {createStore} from "@reduxjs/toolkit";
import persistedReducers from "./reducer/indexReducers";
import persistStore from "redux-persist/es/persistStore";

export const store = createStore(persistedReducers)
export const persistore = persistStore(store)