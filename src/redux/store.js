import { configureStore } from "@reduxjs/toolkit";

import { fetchSlice } from "./slice";

export const store = configureStore({
  reducer:{
    fetchingData: fetchSlice.reducer
  } 
});