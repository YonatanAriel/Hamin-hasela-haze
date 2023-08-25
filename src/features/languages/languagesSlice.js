import { createSlice } from "@reduxjs/toolkit";
import language from "../../data/languages/Hebrew";

// let storedLanguage = null;

// if (localStorage.getItem("language")) {
//   let LSLanguage = localStorage.getItem("language");
//   storedLanguage = await import(`../../data/languages/${LSLanguage}`).then(
//     (module) => module.default
//   );
//   useDispatch(setCurrentLanguage(LSLanguage));
// }

const initialState = {
  language,
  //  storedLanguage ? storedLanguage : language,
  currentLanguage: "Hebrew",
  //  storedLanguage ? storedLanguage : "Hebrew",
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
