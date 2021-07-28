import {combineReducers} from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import aouthReducer from './aouth.reducer/aouth.reducer'

const combinedReducers = combineReducers({
    aouth : aouthReducer
})

const persistConfig = {
    key : 'root',
    storage
}

const persistedReducers = persistReducer(persistConfig , combinedReducers)
export default persistedReducers