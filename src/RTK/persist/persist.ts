import storageSession from "redux-persist/lib/storage/session";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import GameName from "../Slices/GameNameSlice";
import PlatForm from "../Slices/PlatformSlice";

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const allReducers = combineReducers({
  GameName,
  PlatForm,
});

export const persistedReducer = persistReducer(persistConfig, allReducers);
