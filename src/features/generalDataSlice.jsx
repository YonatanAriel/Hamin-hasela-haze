import { createSlice } from "@reduxjs/toolkit";
import { imgsSrc } from "../data/imgsSrc";

const initialState = {
  screenWidth: window.innerWidth,
  imgs: imgsSrc,
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
