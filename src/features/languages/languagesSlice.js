import { createSlice } from "@reduxjs/toolkit";
// import { languages } from "../../data/languages";
// import { Hebrew as language } from "../../data/languages/Hebrew";
import language from "../../data/languages/Hebrew";
// import language from "../../data/languages/English";

const initialState = {
  // language: languages[0],
  language,
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export default languageSlice.reducer;
export const { setLanguage } = languageSlice.actions;
