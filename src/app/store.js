import { configureStore } from "@reduxjs/toolkit";
import languagesSlice from "../features/languages/languagesSlice";
import generalDataSlice from "../features/generalDataSlice";

const store = configureStore({
  reducer: {
    language: languagesSlice,
    generalData: generalDataSlice,
  },
});

export default store;
