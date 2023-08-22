import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screenWidth: window.innerWidth,
};

const generalDataSlice = createSlice({
  name: "general data",
  initialState,
  reducers: {
    changeScreenWidth: (state, action) => {
      state.screenWidth = action.payload;
    },
  },
});

export default generalDataSlice.reducer;
export const { changeScreenWidth } = generalDataSlice.actions;
