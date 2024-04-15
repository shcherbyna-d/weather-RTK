import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

// Define a type for the slice state
interface searchCityState {
  city: string;
}

const initialState: searchCityState = {
  city: "",
};

export const searchCitySlice = createSlice({
  name: "searchCity",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
});

//ACTIONS
export const { add } = searchCitySlice.actions;

//SELECTORS
export const selectSearchCity = (state: RootState): string => {
  return state.searchCity.city;
};

export default searchCitySlice.reducer;
