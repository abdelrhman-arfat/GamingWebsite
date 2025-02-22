import storageSession from "redux-persist/lib/storage/session";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import GameName from "../Slices/GameNameSlice";
import PlatForm from "../Slices/PlatformSlice";
import { GameApi } from "../Slices/GamesSlice";
const persistConfig = {
  key: "root",
  storage: storageSession,
};

const allReducers = combineReducers({
  GameName,
  PlatForm,
  [GameApi.reducerPath]: GameApi.reducer,
});

export const persistedReducer = persistReducer(persistConfig, allReducers);
