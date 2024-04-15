import { configureStore } from "@reduxjs/toolkit";
import searchCityReducer from "./searchCitySlice";

const store = configureStore({
  reducer: {
    searchCity: searchCityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;
