import { createSlice } from "@reduxjs/toolkit";
export const GameNameSlice = createSlice({
  name: "GameName",
  initialState: "",
  reducers: {
    changeGameName: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { changeGameName } = GameNameSlice.actions;
export default GameNameSlice.reducer;
