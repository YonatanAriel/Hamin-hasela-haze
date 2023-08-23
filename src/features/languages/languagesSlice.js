import { createSlice } from "@reduxjs/toolkit";
import language from "../../data/languages/Hebrew";

const initialState = {
  language,
  currentLanguage: "Hebrew",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setCurrentLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },
  },
});

export default languageSlice.reducer;
export const { setLanguage, setCurrentLanguage } = languageSlice.actions;
