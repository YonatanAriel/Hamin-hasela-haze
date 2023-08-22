import { createSlice } from "@reduxjs/toolkit";
const imgs = {
  galleryImgs: [
    "public/assets/photos/24313135_1566128296817535_6124445963853087953_o.jpg",
    "public/assets/photos/36223731_1822101784553517_9173754899614138368_n.jpg",
    "public/assets/photos/36511496_1834823226614706_627389959103315968_n.jpg",
    "public/assets/photos/36851117_1847194788710883_7606274179410690048_n.jpg",
    "public/assets/photos/36946930_1847219648708397_3569031794781061120_n.jpg",
    "public/assets/photos/37778245_1872746329489062_8154907585200259072_n.jpg",
    "public/assets/photos/38212390_1881205438643151_7849967239351500800_n.jpg",
  ],
};

const initialState = {
  screenWidth: window.innerWidth,
  imgs,
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
