import { createSlice } from "@reduxjs/toolkit";
export const PlatFormSlice = createSlice({
  name: "PlatForm",
  initialState: "",
  reducers: {
    changePlatFormName: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { changePlatFormName } = PlatFormSlice.actions;
export default PlatFormSlice.reducer;
