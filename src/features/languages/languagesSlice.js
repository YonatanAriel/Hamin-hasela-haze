import { createSlice } from "@reduxjs/toolkit";
import { languages } from "../../data/languages";

const initialState = {
  languages,
};

const languageSlice = createSlice({
  name: "language",
  initialState,
});

export default languageSlice.reducer;
